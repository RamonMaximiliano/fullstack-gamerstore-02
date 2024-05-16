"use client"
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cartcontext";
import Cart from "../Cart/Cart";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

export default function Header() {
    const { open, setOpen, menu, setMenu } = useContext(CartContext)

    const handleMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    function handleCart() {
        if (open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <>
            {/*SIDE MENU START*/}
            {menu && <HeaderMenu/>}
            {open && <Cart />}
            {/*SIDE MENU END*/}

            {/*HEADER START*/}
            <div className="container mx-auto text-white flex justify-between p-6 items-center border-b border-gray-500">
                <AiOutlineMenu size={29} onClick={() => handleMenu()} className="cursor-pointer border p-1 rounded border-gray-500" />
                <Link href={"/"}>
                    <h1 className="font-bold text-2xl cursor-pointer"><span className="text-purple-600">Gamer</span> Store</h1>
                </Link>
                <AiOutlineShoppingCart size={35} className="cursor-pointer border p-1 rounded border-gray-500" onClick={() => handleCart()} />
            </div>
            {/*HEADER END*/}
        </>
    );
}