import { prismaClient } from "@/lib/prisma";
import {NextResponse} from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(){
    const purchases = await prismaClient.purchase.findMany();
    return new NextResponse(JSON.stringify(purchases), {status:200});
}



/*

Neste arquivo somente foi criada a URL da API para a table user somente
http://localhost:3000/api/purchases

Da para coletar dados com esta API

*/





/* 

OLD APP:
export async function POST(request: Request){
    const req:any = await request.json();
    const { start, end, userId, tripId, totalPaid, guests, picture, hotel, country, location } = req;

    await prisma.tripReservation.create({
        data: {
          start,
          end,
          userId,
          tripId,
          totalPaid,
          guests,
          picture,
          hotel,
          country,
          location
        },
       
      });

      return new NextResponse(
        JSON.stringify({
          success: true,
        }),
        { status: 201 }
      );
    }




    async function logReservation() {
        const response = await fetch("/apitripreser", {
            method: "POST",
            body: Buffer.from(
                JSON.stringify({
                    tripId: props.id,
                    start: props.startdate,
                    end: props.enddate,
                    userId: loggedID.id,
                    totalPaid: props.price,
                    guests: props.guests,
                    picture: props.picture,
                    hotel: props.hotel,
                    country: props.country,
                    location: props.location
                })
            ),
        });
        setSuccess(true);
                setTimeout(() => {
                router.push('/');
              }, 3000); 
    } 
    
OLD APP:
*/




/*

CHAT GPT SUGGESTION:

Correct Example in Prisma
When you're inserting this JSON data into your purchase field using Prisma, make sure the data you pass is correctly formatted:

Creating a New Record:
-------------------------------------------------------
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newPurchase = await prisma.purchase.create({
    data: {
      email: 'example@example.com',
      quantity: 5,
      purchase: JSON.stringify([
        { "prodID": "product1", "quant": 1 },
        { "prodID": "product2", "quant": 2 },
        { "prodID": "product3", "quant": 1 },
        { "prodID": "product4", "quant": 1 }
      ])
    }
  });

  console.log(newPurchase);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
-------------------------------------------------------
=========================================================================================================

Retrieving and Parsing JSON Data, When you retrieve the data, you may need to parse the JSON string back into a JavaScript object:
-------------------------------------------------------
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const purchases = await prisma.purchase.findMany();

  purchases.forEach(purchase => {
    purchase.purchase = JSON.parse(purchase.purchase);
    console.log(purchase);
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
-------------------------------------------------------
=========================================================================================================
Sending Correct JSON Data, Ensure that when you send data from your client to your API, it is properly formatted as valid JSON:
-------------------------------------------------------
fetch('/api/purchases', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'example@example.com',
    quantity: 5,
    purchase: [
      { "prodID": "product1", "quant": 1 },
      { "prodID": "product2", "quant": 2 },
      { "prodID": "product3", "quant": 1 },
      { "prodID": "product4", "quant": 1 }
    ]
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
-------------------------------------------------------
*/