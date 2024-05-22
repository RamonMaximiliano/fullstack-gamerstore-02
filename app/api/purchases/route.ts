import { prismaClient } from "@/lib/prisma";
import {NextResponse} from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(){
    const purchases = await prismaClient.purchase.findMany();
    return new NextResponse(JSON.stringify(purchases), {status:200});
}

export async function POST(request: Request){
  const req:any = await request.json();
  const { email, purchase}= req;

  await prismaClient.purchase.create({
    data: {
      email,
      purchase
    }
  })

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 }
  );
}

/*

Neste arquivo somente foi criada a URL da API para a table purchases somente
http://localhost:3000/api/purchases

Da para coletar dados com esta API

*/

