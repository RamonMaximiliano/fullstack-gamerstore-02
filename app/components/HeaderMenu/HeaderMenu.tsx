"use client"
import React, { useEffect, useRef } from "react"
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { GrCatalog } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { CartContext } from "@/app/providers/cartcontext";

export default function HeaderMenu() {
    const { setMenu } = useContext(CartContext)
    const { status, data } = useSession();
    const router = useRouter()
    const menuRef = useRef<HTMLElement | null>(null)

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

    useEffect(() => {
        const clickOutsideCart = (event: any) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // close cart
                setMenu(false);
            }
        };

        // event listener to listen for clicks outside the cart
        document.addEventListener('click', clickOutsideCart);

        // Removing the event listener when component unmounts
        return () => {
            document.removeEventListener('click', clickOutsideCart);
        };
    }, []);
    
    return (
        <>
            <div className="w-4/5 absolute bg-gray-900 flex flex-col pb-2 pr-2 pl-2 duration-200 z-10 rounded-br-lg" ref={menuRef as React.RefObject<HTMLDivElement>}>
                <div className="flex justify-end p-2 duration-200">
                    <RxCross2 size={20} onClick={() => { setMenu(false) }} className="cursor-pointer" />
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
        </>
    );
}