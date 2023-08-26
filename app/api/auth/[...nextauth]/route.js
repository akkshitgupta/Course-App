import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import { connectDB } from "@dbConfig/dbConfig";
import USER from "@models/userModel";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    encryption: true,
  },
  callbacks: {
    async session({ session }) {
      const sessionUser = await USER.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();
      session.user.author = sessionUser.isAuthor;

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectDB();

        const user = await USER.findOne({ email: profile.email });
        if (user) return true;

        const newUser = new USER({
          full_name: profile.name,
          email: profile.email,
          username: profile.name.split("@")[0],
          image: profile.picture,
        });

        await newUser.save();
        return router.push("/");
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
