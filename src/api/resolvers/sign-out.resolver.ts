import { ogm } from "../../index";
import { GraphQLWhereArg } from "@neo4j/graphql";

export const signOutReslover = async (
  _source: any,
  { allDevices }: { allDevices: Boolean },
  context: any
) => {
  try {
    // clear the refresh token from the client
    context.res.clearCookie("refreshToken");
    context.res.set("access-control-expose-headers", "Set-Cookie");
    const RefreshTokenModel = ogm.model("RefreshToken");
    const refreshToken = context.req.cookies.refreshToken;
    const whereAnds: GraphQLWhereArg[] = [
      {
        user: { id: context?.jwt?.sub },
      },
    ];

    if (!allDevices) {
      whereAnds.push({
        id: refreshToken,
      });
    }

    const resp = await RefreshTokenModel.delete({
      where: {
        AND: whereAnds,
      },
    });

    const token = Array.isArray(resp) ? resp[0] : undefined;
    return true;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
