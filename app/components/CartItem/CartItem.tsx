import React, { useEffect, useState } from "react";
import { LuTrash } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cartcontext";

type cartItem = {
    id: string,
    name: string;
    quantity: number,
    price: number,
    imageUrls: string;
    discountPercentage: number;
}

export default function CartItem(props: cartItem) {
    const [quant, setQuant] = useState(props.quantity);
    const { cartProducts, setCartProducts } = useContext(CartContext)

    function plus() {
        if (quant >= 1) {
            const updatedQuant = quant + 1;
            setQuant(updatedQuant)
            const quantCartProducts = cartProducts.map((prod: cartItem) => {
                if (prod.id === props.id) {
                    prod.quantity = updatedQuant
                }
                return prod
            })
            setCartProducts(quantCartProducts)
        }
    }

    function minus() {
        if (quant > 1) {
            const updatedQuant = quant - 1;
            setQuant(updatedQuant)
            const quantCartProducts = cartProducts.map((prod: cartItem) => {
                if (prod.id === props.id) {
                    prod.quantity = updatedQuant
                }
                return prod
            })
            setCartProducts(quantCartProducts)
        }
    }

    function deleteItem(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation();
        const deleteList = cartProducts.filter((item: cartItem) => {
            return item.id != props.id
        })
        setCartProducts(deleteList)
    }

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
                        <p>R$ {(props.price - props.discountPercentage) * quant} <span className="text-gray-500 text-sm line-through">R$ {props.price * quant}</span></p>
                    </div>
                    <div className="flex items-center w-[130px] justify-between">
                        <div className="border-gray-400 border p-2 rounded-md cursor-pointer hover:bg-slate-800 duration-200 " onClick={() => minus()}>
                            <FaAngleLeft size={20} />
                        </div>
                        <p>{quant}</p>
                        <div className="border-gray-400 border p-2 rounded-md cursor-pointer hover:bg-slate-800 duration-200 " onClick={() => plus()}>
                            <FaAngleRight size={20} />
                        </div>
                    </div>
                </div>
                <div className="border-gray-400 border p-2 rounded-md cursor-pointer hover:bg-slate-800 duration-200 " onClick={deleteItem}>
                    <LuTrash size={20} />
                </div>
            </div>
        </>
    );
}

