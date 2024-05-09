import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cartcontext";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
    const { open, setOpen } = useContext(CartContext)

    return (
        <>
            <div className="w-full flex justify-end">

                <div className="w-3/5 absolute bg-gray-900 flex flex-col duration-200 z-10">

                    {/*HEADER START*/}
                    <div className="flex items-center justify-between w-11/12 mx-auto my-4">
                        <div className="flex w-8/12 flex-wrap">
                            <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-4 justify-center">
                                <div className="flex items-center w-8/12 justify-between">
                                    <AiOutlineShoppingCart size={18} className="mr-3" />
                                    <p>CARRINHO</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end p-2 duration-200">
                            <RxCross2 size={20} className="cursor-pointer" onClick={() => { setOpen(false) }} />
                        </div>
                    </div>
                    {/*HEADER END*/}

                    <CartItem/>

                    {/*VALUES START*/}
                    <div className="flex flex-col justify-between w-11/12 mx-auto my-4">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>Number</p>
                        </div>  
                        <div className="flex justify-between">
                            <p>Entrega</p>
                            <p>GRÁTIS</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Descontos</p>
                            <p>Number</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Total</p>
                            <p>Number</p>
                        </div>
                    </div>
                    {/*VALUES END*/}

                    <button className="p-4 bg-purple-800 w-11/12 rounded-lg my-8 mx-auto">FINALIZAR COMPRA</button>     
                </div>
            </div>
        </>
    );
}

