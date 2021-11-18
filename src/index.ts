// Establish environment variables from .env file
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import https from "https";
import neo4j from "neo4j-driver";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server-express";
import "graphql-import-node";
import CORE_SCHEMA from "./api/schema/core.graphql";
import { OGM } from "@neo4j/graphql-ogm";
import fs from "fs";
import cookieParser from "cookie-parser";
import { resolvers } from "./api/resolvers/resolvers";
import { emailService } from "./services/email-service";

// Establish Config for Neo4jGraphQL
const config = {
  jwt: {
    secret: process.env.SECRET,
  },
};

// Singleton driver for the database
export const driver = neo4j.driver(
  process.env.NEO4J_HOST,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

// Augment the typeDefs to generate API schema (Thanks for your magic Neo4jGraphQL!)
export const neoSchema = new Neo4jGraphQL({
  typeDefs: CORE_SCHEMA,
  driver,
  config,
  resolvers,
});

// Create an OGM class with the same generated schema (For interacting with the database)
export const ogm = new OGM({
  typeDefs: CORE_SCHEMA,
  driver,
  config,
  resolvers,
});

let testAccount: { user: string; pass: string };

// API Server Startup
(async function startApolloServer() {
  console.log(`🚀 Starting Klick API Server ...`);

  // Create Express App
  const app = express();

  // Cors options as a fuction; pass back any origin (for now);
  const corsOptions = {
    origin: (origin: any, callback: any) => {
      callback(null, [origin]);
    },
    credentials: true,
  };

  // Make sure we can read cookies from request
  app.use(cookieParser());

  // SSL Options
  const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
  };

  // Create an ApolloServer with the generated API schema
  const server = new ApolloServer({
    schema: neoSchema.schema,
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  // Start the Apollo Server
  await server.start();

  // Bind the ApolloServer to /api endpoint of Express
  server.applyMiddleware({ app, path: "/api", cors: corsOptions });

  // Create a https server and bind to Express
  const httpServer = https.createServer(options, app);

  // Start that server
  await new Promise((resolve) => {
    httpServer.listen({ port: process.env.API_PORT }, () => {
      resolve(true);
    });
  });

  console.log(
    `🚀 API ready at https://localhost:${process.env.API_PORT}${server.graphqlPath}`
  );
})();
