import React from "react";
import { Product } from "@prisma/client";
import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";

type prod = {
    id: string;
    discount: number;
    name: string,
    image: string[];
    price: number;
}

export default function ProdItem(props: prod) {
    return (
        <>
            <div className="w-[250px] m-6">
                <div className="bg-slate-900 w-[250px] h-[250px] items-center rounded-2xl">
                    <div className="w-[70px] h-[30px] flex items-center bg-purple-700 justify-center absolute mt-3 ml-3 rounded-2xl">
                        <div className="flex items-center justify-around w-9/12">
                            <FaArrowDownLong />
                            <p>{props.discount}</p>
                            <FaPercentage />
                        </div>
                    </div>
                    <div className="w-9/12 mx-auto pt-[10%]">
                        <img src={props.image[0]} alt="test" className="m-auto my-auto max-w-full"></img>
                    </div>
                </div>
                <div className="mt-1">
                    <h1 className="text-lg">{props.name}</h1>
                    <div className="flex items-center justify-between w-7/12">
                        <p className="font-bold	text-xl">R$ {props.price}</p>
                        <p className="line-through">R$ {props.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
