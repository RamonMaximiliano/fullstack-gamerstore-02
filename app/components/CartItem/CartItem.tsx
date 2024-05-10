import React from "react";
import { LuTrash } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

type cartItem = {
    id: string,
    name: string;
    quantity: number,
    price: number,
    imageUrls: string;
    discountPercentage: number;
}

export default function CartItem(props:cartItem) {
    return (
        <>
            <div className="flex items-center w-11/12 justify-between mx-auto">
                <div className="w-[120px] h-[120px] bg-slate-950 rounded-2xl items-center flex mt-1 cursor-pointer">
                    <div className="w-[190px] mx-auto">
                        <img src={props.imageUrls} className="m-auto my-auto max-w-full p-3" alt="Image"></img>
                    </div>
                </div>

                <div className="w-10/12 mx-8 flex flex-col justify-between h-[120px]">
                    <div>
                        <p>{props.name}</p>
                        <p>{props.price}</p>
                    </div>
                    <div className="flex items-center w-[130px] justify-between">
                        <div className="border-gray-400 border p-2 rounded-md">
                            <FaAngleLeft size={20} />
                        </div>
                        <p>{props.quantity}</p>
                        <div className="border-gray-400 border p-2 rounded-md">
                            <FaAngleRight size={20} />
                        </div>
                    </div>
                </div>
                <div className="border-gray-400 border p-2 rounded-md">
                    <LuTrash size={20} />
                </div>
            </div>
        </>
    );
}
