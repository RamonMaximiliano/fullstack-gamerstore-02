import { prismaClient } from "@/lib/prisma";
import {NextResponse} from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(){
    const purchases = await prismaClient.purchase.findMany();
    return new NextResponse(JSON.stringify(purchases), {status:200});
}

export async function POST(request: Request){
  const req:any = await request.json();
  const { email, purchase,subtotal,discount,total}= req;

  await prismaClient.purchase.create({
    data: {
      email,
      purchase,
      subtotal,
      discount,
      total
    }
  })

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 }
  );
}

export async function DELETE(request: Request){
  const req: any = await request.json();
    const { id } = req;
    await prismaClient.purchase.delete({
      where: {
        id: id,
      },
    });

  return new NextResponse(
      JSON.stringify({
        success: true,
      }),
      { status: 200 }
    )
}


