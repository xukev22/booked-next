import type { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// using google oauth
// https://next-auth.js.org/configuration/providers/oauth

// also custom credentials w/ DB
// https://next-auth.js.org/configuration/providers/credentials

// defaults:
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        // get data from db
        // for now: we are hard coding
        // https://next-auth.js.org/configuration/providers/credentials
        const user = {
          id: "42",
          username: "kevuhh",
          password: "super secret",
          name: "Kev",
        };
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          throw Error("Invalid!");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      // Add user ID, username, name, and email to the session object
      if (token) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Add user info to the JWT token on sign-in
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
