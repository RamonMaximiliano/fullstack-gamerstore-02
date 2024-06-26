import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"
import { prismaClient } from "@/lib/prisma"

export const authOptions: AuthOptions= {
    adapter: PrismaAdapter(prismaClient) as Adapter,
    providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
     
    ],
    secret: process.env.NEXTAUTH_SECRET,
}