"use client"
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { GrCatalog } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    return (
        <>
            {/*SIDE MENU START*/}
            {menu &&
                <div className="w-4/5 absolute bg-gray-900 flex flex-col pb-2 pr-2 pl-2">
                    <div className="flex justify-end p-2 duration-200">
                        <RxCross2 size={20} onClick={() => handleMenu()} />
                    </div>
                    <div className="flex w-11/12 p-1 mx-auto items-center mb-1 rounded-sm text-xl">
                        <h1>Menu</h1>
                    </div>
                    <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm text-sm">
                        <p>User Pic</p>
                        <p>User Name</p>
                    </div>
                    <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm  text-sm">
                        <MdLogout size={18} className="mr-3" />
                        <p>Fazer Logout</p>
                    </div>
                    <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm text-sm">
                        <FiHome size={18} className="mr-3" />
                        <p>Início</p>
                    </div>
                    <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm text-sm">
                        <AiOutlinePercentage size={18} className="mr-3" />
                        <p>Ofertas</p>
                    </div>
                    <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm text-sm">
                        <GrCatalog size={18} className="mr-3" />
                        <p>Catálogo</p>
                    </div>
                </div>
            }
            {/*SIDE MENU END*/}

            {/*HEADER START*/}
            <div className="container mx-auto text-white flex justify-between p-6 items-center">
                <AiOutlineMenu size={20} onClick={() => handleMenu()} />
                <h1 className="font-bold text-lg"><span className="text-purple-600">Gamer</span> Store</h1>
                <AiOutlineShoppingCart size={25} />
            </div>
            {/*HEADER END*/}
        </>
    );
}
