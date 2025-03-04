import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { accountsApiLogin } from "./services/api/authenticate/authenticate";
import { UserLoginSchema } from "./services/api/ninjaExtraAPI.schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const body: UserLoginSchema = {
          email: credentials?.email as string,
          password: credentials?.password as string,
        };

        try {
          const res = await accountsApiLogin(body);
          const result = res.data;

          if (result && result.access && result.refresh) {
            return {
              id: "",
              email: result.email,
              accessToken: result.access,
              refreshToken: result.refresh,
            };
          }

          return null;
        } catch (error) {
          if (error instanceof Error && error.message) {
            return null;
          }

          throw error;
        }
      },
    }),
  ],
});
