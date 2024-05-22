"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import OrderItem from "../components/OrderItem/OrderItem";

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
    ]
};

export default function Meuspedidos() {
    const { status, data } = useSession();
    const [myOrders, setOrders] = useState([]);
    console.log(data)
    console.log(status)

    useEffect(() => {
        const myOrders = async () => {
            const orders = await fetch("http://localhost:3000/api/purchases ").then((res) => res.json());
            setOrders(orders)
        }
        myOrders();

    }, []);

    return (
        <>
            <div className="container mx-auto">
                {myOrders.map((item: order) => {
                    return <div>
                        <h1>Pedido N°: {item.id}</h1>
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
                    </div>
                })}
            </div>
        </>
    );
}

