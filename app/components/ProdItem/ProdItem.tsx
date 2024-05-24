import React from "react";
import { Product } from "@prisma/client";
import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import Link from "next/link";

type prod = {
    id: string;
    discount: number;
    name: string,
    image: string[];
    price: number;
    slug: string;
}

export default function ProdItem(props: prod) {
    return (
        <>
        <Link href={`/ProdDetail/${props.slug}`}>
            <div className="w-[240px] m-3 hover:text-purple-400 duration-200">
                <div className="bg-slate-900 w-[250px] h-[250px] items-center rounded-2xl flex">
                    {props.discount > 0 &&
                        <div className="w-[70px] h-[30px] flex items-center bg-purple-700 justify-center absolute mb-48 ml-3 rounded-2xl">
                            <div className="flex items-center justify-around w-9/12">
                                <FaArrowDownLong />
                                <p>{props.discount}</p>
                                <FaPercentage />
                            </div>
                        </div>
                    }
                    <div className="w-[190px] mx-auto">
                        <img src={props.image[0]} alt="prod" className="m-auto my-auto max-w-full"></img>
                    </div>
                </div>
                <div className="mt-1">
                    <h1 className="text-lg">{props.name}</h1>
                    <div className="flex items-center justify-between w-7/12">
                        <p className="font-bold	text-xl">R$ {props.price}</p>
                        <p className="line-through text-gray-400">R$ {props.price}</p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    );
}


/* 
<div class="flex justify-center items-center h-screen">
  <div class="bg-gray-200 p-6 rounded-lg">
    <!-- Your content here -->
  </div>
</div> */