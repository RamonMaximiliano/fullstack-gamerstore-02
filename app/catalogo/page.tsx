"use client"
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import { GrCatalog } from "react-icons/gr";

export default function Catalog() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await fetch("/api/categories ").then((res) => res.json());
            setCategories(cats)
        };
        getCategories();
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex w-8/12 flex-wrap mx-auto">
                    <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-9 justify-center">
                        <div className="flex items-center w-8/12 justify-between">
                            <GrCatalog size={18} className="mr-3" />
                            <p>CATÁLOGO</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-10/12 flex-wrap mx-auto mb-20 lg:w-7/12">
                    {
                        categories.map((item) => {
                            return <Link href={`/Category/${item.slug}`} key={item.id}>
                                <div className="flex flex-col items-center justify-center bg-slate-900 rounded-2xl w-[250px] mx-6 my-6 cursor-pointer" key={item.id}>
                                    <div className="w-[250px]">
                                        <div className="bg-purple-900 w-[250px] h-[250px] items-center rounded-t-2xl flex">
                                            <div className="w-[190px] mx-auto">
                                                <img src={item.imageUrl} alt="test" className="m-auto my-auto max-w-full"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="p-4 font-bold">{item.name}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </>
    );
}

