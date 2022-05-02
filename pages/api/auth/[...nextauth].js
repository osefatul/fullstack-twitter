import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db } from "../../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import * as firestoreFunctions from "firebase/firestore";

export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // adapter: FirebaseAdapter({
  //   db: db,
  //   ...firestoreFunctions,
  // }),

  // For example, to pass a value from the sign-in to the frontend, client-side, you can use a combination of the session and jwt callback like so:

  callbacks: {
    async session({ session, token }) {
      //This will be the username
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },

  // Add secret JWT in order to deploy it on vercel.
  secret: process.env.JWT_SECRET,
});
