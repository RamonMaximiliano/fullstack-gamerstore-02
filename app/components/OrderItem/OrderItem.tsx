import React from "react";

type orderItem = {
    id: string,
    name: string;
    quantity: number,
    price: number,
    imageUrls: string;
    discountPercentage: number;
}

export default function OrderItem(props: orderItem) {
    return (
        <>
            <div className="flex items-center w-11/12 justify-between mx-auto my-5">
                <div className="w-[120px] h-[120px] bg-slate-950 rounded-2xl items-center flex mt-1 cursor-pointer">
                    <div className="w-[190px] mx-auto">
                        <img src={props.imageUrls} className="m-auto my-auto max-w-full p-3" alt="Image"></img>
                    </div>
                </div>
                <div className="w-10/12 flex justify-between h-[120px] items-center">
                    <div>
                        <p>{props.name}</p>
                        <p>R$ {(props.price - props.discountPercentage) * props.quantity} <span className="text-gray-500 text-sm line-through">R$ {props.price * props.quantity}</span></p>
                    </div>
                    <div className="flex items-center w-[100px] text-gray-500 justify-end">
                        <p>Qtd: {props.quantity}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

