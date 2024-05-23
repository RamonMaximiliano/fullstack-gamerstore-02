"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import OrderItem from "../components/OrderItem/OrderItem";
import { FaShoppingBasket } from "react-icons/fa";

type order = {
    id: string,
    email: string,
    purchase: [
        {
            id: string,
            name: string,
            price: string,
            quantity: number,
            imageUrls: string,
            discountPercentage: number
        }
    ],
    subtotal: string,
    discount: string,
    total: string
};

export default function Meuspedidos() {
    const { status, data } = useSession();
    const [myOrders, setOrders] = useState([]);
    console.log(data)
    console.log(status)

    useEffect(() => {
        const myOrders = async () => {
            const orders = await fetch("http://localhost:3000/api/purchases ").then((res) => res.json());
            const ordersByUser = orders.filter((item: order) => {
                return item.email === data?.user?.email
            })
            setOrders(ordersByUser)
        }
        myOrders();
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex w-8/12 flex-wrap mx-auto mt-8">
                    <div className="border-2 w-[210px] h-[45px] flex rounded-3xl border-purple-600 my-4 justify-center">
                        <div className="flex items-center w-10/12 justify-between">
                            <FaShoppingBasket size={18} className="mr-3" />
                            <p>MEUS PEDIDOS</p>
                        </div>
                    </div>
                </div>
                {myOrders.map((item: order) => {
                    return <div className="my-8 border-gray-200	border rounded-xl w-8/12 mx-auto pt-6">
                        <div className="flex flex-col w-11/12 justify-between mx-auto">
                            <h1>NÚMERO DO PEDIDO</h1>
                            <p className="text-sm text-gray-500">{item.id}</p>
                        </div>
                        {
                            item.purchase.map((purchasedItem) => {
                                return <div>
                                    <OrderItem id={purchasedItem.id}
                                        name={purchasedItem.name}
                                        price={Number(purchasedItem.price)}
                                        quantity={purchasedItem.quantity}
                                        imageUrls={purchasedItem.imageUrls}
                                        discountPercentage={purchasedItem.discountPercentage}

                                    />
                                </div>
                            })
                        }
                        {/*VALUES START*/}
                        <div className="flex flex-col justify-between w-11/12 mx-auto my-8">
                            <div className="flex justify-between border-t-2 text-sm border-gray-500 pt-2 pb-2">
                                <p>Subtotal</p>
                                <p>{item.subtotal}</p>
                            </div>
                            <div className="flex justify-between border-t-2 text-sm border-gray-500 pt-2 pb-2">
                                <p>Entrega</p>
                                <p>GRÁTIS</p>
                            </div>

                            <div className="flex justify-between border-t-2 text-sm border-gray-500 pt-2 pb-2">
                                <p>Descontos</p>
                                <p>{item.discount}</p>
                            </div>

                            <div className="flex justify-between font-bold text-lg border-t-2 border-gray-500 pt-2 pb-2">
                                <p >Total</p>
                                <p>{item.total}</p>
                            </div>
                        </div>
                        {/*VALUES END*/}
                    </div>
                })}
            </div>
        </>
    );
}

