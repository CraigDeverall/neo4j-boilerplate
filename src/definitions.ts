export interface AuthenticateUserArgs {
  email: string;
  password: string;
}

export interface BackendConfig {
  neo4jHost: string;
  neo4jUser: string;
  neo4jPassword: string;
  sslKeyPath: string;
  sslCertPath: string;
  schema: any; // @TODO [type]
  apiPath: string;
  apiPort: number;
  resolvers: any; //@TODO [type]
  secret: string;
}
