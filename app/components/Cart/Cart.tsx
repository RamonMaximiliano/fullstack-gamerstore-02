"use client"
import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cartcontext";
import CartItem from "../CartItem/CartItem";
import { signIn, signOut, useSession } from "next-auth/react";

type cartItem = {
    id: string,
    name: string;
    quantity: number,
    price: number,
    imageUrls: string;
    discountPercentage: number;
}

export default function Cart() {
    const { open, setOpen, products, cartProducts, setCartProducts } = useContext(CartContext)
    const [subtotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const cartRef = useRef<HTMLElement | null>(null)
    const { status, data } = useSession();

    useEffect(() => {
        const subTot = cartProducts.reduce(subReduce, 0)
        function subReduce(subTot: number, item: cartItem) {
            return subTot += item.price * item.quantity
        }
        setSubTotal(subTot)

        const tot = cartProducts.reduce(totReduce, 0)
        function totReduce(totVal: number, item: cartItem) {
            return totVal += (item.price - item.discountPercentage) * item.quantity
        }
        setTotal(tot)

        setDiscount(tot - subTot)

    }, [cartProducts])

    useEffect(() => {
        const clickOutsideCart = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                // close cart
                setOpen(false);
            }
        };

        // event listener to listen for clicks outside the cart
        document.addEventListener('mousedown', clickOutsideCart);

        // Removing the event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', clickOutsideCart);
        };
    }, [setOpen]);

    async function finish() {
        if(status === "authenticated" && cartProducts.length > 0){

        const response = await fetch("/api/purchases", {
            method: "POST",
            body: Buffer.from(
                JSON.stringify({
                    email: data?.user?.email,
                    purchase: cartProducts,
                    subtotal: subtotal,
                    discount: discount,
                    total: total
                })
            ),
        });
        setCartProducts([])
        window.alert("Compra finalizada com sucesso!")
    } else if (status === "authenticated" && cartProducts.length == 0){
        window.alert("Seu carrinho de compras esta vazio!")
    } else {
        window.alert("Por favor logue para finalizar sua compra!")
    }
    }

    return (
        <>
            <div className="w-full flex justify-end">
                <div className="w-5/5 lg:w-3/5 absolute bg-gray-900 flex flex-col duration-200 z-10 rounded-bl-lg border-l-2 border-b-2 border-gray-400" ref={cartRef as React.RefObject<HTMLDivElement>}>

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
                    {
                        cartProducts.map((item: cartItem) =>
                            <CartItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price} imageUrls={item.imageUrls} discountPercentage={item.discountPercentage} />
                        )
                    }

                    {/*VALUES START*/}
                    <div className="flex flex-col justify-between w-11/12 mx-auto my-4">
                        <div className="flex justify-between border-t-2 text-sm border-gray-500 pt-2 pb-2">
                            <p>Subtotal</p>
                            <p>{subtotal}</p>
                        </div>
                        <div className="flex justify-between border-t-2 text-sm border-gray-500 pt-2 pb-2">
                            <p>Entrega</p>
                            <p>GRÁTIS</p>
                        </div>

                        <div className="flex justify-between border-t-2 text-sm border-gray-500 pt-2 pb-2">
                            <p>Descontos</p>
                            <p>{discount}</p>
                        </div>

                        <div className="flex justify-between font-bold text-lg border-t-2 border-gray-500 pt-2 pb-2">
                            <p >Total</p>
                            <p>{total}</p>
                        </div>
                    </div>
                    {/*VALUES END*/}

                    <button className="p-4 bg-purple-800 w-11/12 rounded-lg my-8 mx-auto hover:bg-purple-600 duration-200" onClick={() => finish()}>FINALIZAR COMPRA</button>
                </div>
            </div>
        </>
    );
}

