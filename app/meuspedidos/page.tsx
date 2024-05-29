"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import OrderItem from "../components/OrderItem/OrderItem";
import { FaShoppingBasket } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { LuTrash } from "react-icons/lu";

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
    const [update, setUpdate] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const myOrders = async () => {
            const orders = await fetch("/api/purchases ").then((res) => res.json());
            const ordersByUser = orders.filter((item: order) => {
                return item.email === data?.user?.email
            })
            setOrders(ordersByUser)
        }
        myOrders();
    }, [update]);

    async function deletePurchase(id: string) {
        const response = await fetch("/api/purchases", {
            method: "DELETE",
            body: JSON.stringify({ id }),
        })
        setTimeout(() => {
            router.refresh()
            setUpdate(!update)
        }, 5000);
        window.alert("Pedido deletado com sucesso!")
        return response.json();
    }

    return (
        <>
            {status == "authenticated" ?
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
                        return <div className="my-8 border-gray-200	border rounded-xl w-8/12 mx-auto pt-6 bg-gray-900" key={item.id}>
                            <div className="flex w-11/12 justify-between mx-auto items-center">
                                <div className="flex flex-col">
                                    <h1>NÚMERO DO PEDIDO</h1>
                                    <p className="text-sm text-gray-500">{item.id}</p>
                                </div>
                                <div className="border-gray-400 border p-2 rounded-md cursor-pointer w-[5%] h-[5%] text-center items-center hover:bg-slate-800 duration-200" onClick={() => deletePurchase(item.id)}>
                                    <LuTrash size={20} className="mx-auto" />
                                </div>
                            </div>
                            {
                                item.purchase.map((purchasedItem) => {
                                    return <div key={purchasedItem.id}>
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
                </div> : <div className="w-80 mx-auto flex items-center text-center my-28 font-extrabold text-2xl">
                    <p>Por favor logue para visualizar seus pedidos</p>
                </div>
            }
        </>
    );
}