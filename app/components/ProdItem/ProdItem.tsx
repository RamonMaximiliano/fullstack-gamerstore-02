import React from "react";
import { Product } from "@prisma/client";

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
            <p>{props.name}</p>
            <p>{props.id}</p>
        </>
    );
}
