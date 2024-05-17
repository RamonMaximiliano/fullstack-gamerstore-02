import { prismaClient } from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(){
    const categories = await prismaClient.user.findMany();
    return new NextResponse(JSON.stringify(categories), {status:200});
}



/*

Neste arquivo somente foi criada a URL da API para a table user somente
http://localhost:3000/api/users

Da para coletar dados com esta API

*/