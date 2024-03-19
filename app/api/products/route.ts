import { prismaClient } from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(){
    const products = await prismaClient.product.findMany();
    return new NextResponse(JSON.stringify(products), {status:200});
}



/*

Neste arquivo somente foi criada a URL da API para a table product somente
http://localhost:3000/api/products

Da para coletar dados com esta API

*/