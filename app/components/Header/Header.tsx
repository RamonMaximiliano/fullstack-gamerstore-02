"use client"
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePercentage } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { GrCatalog } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter()
    const { status, data } = useSession();
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    const handleLogin = () => {
        signIn();
    }
    const handleLogOut = () => {
        signOut();
        setMenu(false)
    }

    function handleCatalog() {
        router.push('/catalogo')
        setMenu(false)
    }
    function handleInicio() {
        router.push('/')
        setMenu(false)
    }

    return (
        <>
            {/*SIDE MENU START*/}
            {menu &&
                <div className="w-4/5 absolute bg-gray-900 flex flex-col pb-2 pr-2 pl-2 duration-200 z-10 rounded-br-lg">
                    <div className="flex justify-end p-2 duration-200">
                        <RxCross2 size={20} onClick={() => handleMenu()} className="cursor-pointer" />
                    </div>
                    <div className="flex w-11/12 p-1 mx-auto items-center mb-1 rounded-sm text-xl">
                        <h1>Menu</h1>
                    </div>
                    {status === "authenticated" && data.user && (
                        <div className="flex w-11/12 border-2 p-2 mx-auto items-center my-1 rounded-sm text-sm">
                            <img src={String(data.user.image)} className="rounded-full w-[35px] mx-2"></img>
                            <p className="text-wrap">{data.user.name!}</p>
                        </div>
                    )
                    }

                    {status === "unauthenticated" &&
                        (
                            <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm  text-sm cursor-pointer" onClick={() => handleLogin()}>
                                <CiLogin size={19} className="mr-3" />
                                <p>Fazer Login</p>
                            </div>
                        )
                    }

                    {status === "authenticated" &&
                        (
                            <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm  text-sm cursor-pointer" onClick={() => handleLogOut()}>
                                <CiLogout size={18} className="mr-3" />
                                <p>Fazer Logout</p>
                            </div>
                        )
                    }
                    <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm text-sm cursor-pointer" onClick={() => handleInicio()}>
                        <FiHome size={18} className="mr-3" />
                        <p>Início</p>
                    </div>
                    <div className="flex w-11/12 border-2 p-3 mx-auto items-center my-1 rounded-sm text-sm cursor-pointer mb-6" onClick={() => handleCatalog()}>
                        <GrCatalog size={18} className="mr-3" />
                        <p>Catálogo</p>
                    </div>
                </div>
            }
            {/*SIDE MENU END*/}

            {/*HEADER START*/}
            <div className="container mx-auto text-white flex justify-between p-6 items-center border-b border-gray-500">
                <AiOutlineMenu size={29} onClick={() => handleMenu()} className="cursor-pointer border p-1 rounded border-gray-500" />
                <Link href={"/"}>
                    <h1 className="font-bold text-2xl cursor-pointer"><span className="text-purple-600">Gamer</span> Store</h1>
                </Link>
                <AiOutlineShoppingCart size={35} className="cursor-pointer border p-1 rounded border-gray-500" />
            </div>
            {/*HEADER END*/}
        </>
    );
}
