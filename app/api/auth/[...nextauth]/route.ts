import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

export const handler = NextAuth(authOptions) as never;
export {handler as GET, handler as POST}


/* 

import NextAuth, {AuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"
import {prisma} from "@/lib/prisma"

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
  };
  
  export const handler = NextAuth(authOptions) as never;
  export {handler as GET, handler as POST}
  


*/