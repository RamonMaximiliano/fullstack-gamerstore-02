import React from "react";
import { Product } from "@prisma/client";
import Image from "next/image";

type prod = {
    id: string;
    discount: number;
    name: string,
    image: string[];
    price: number;
}

export default function ProdItem(props:prod) {
    return (
        <>
        <div>
        <p>{props.discount}</p>
        <img src={props.image[0]}></img>
        <img src={props.image[0]}></img>
        <Image src={props.image[0]} alt="test" width="200" height="200"></Image>
        <p>{props.name}</p>
        <p>{props.name}</p>


            <p>{props.name}</p>
            <p>R$ {props.price}</p>
            <p>R$ {props.price}</p>



            </div>
        </>
    );
}
