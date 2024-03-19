"use client"
import { Product } from "@prisma/client";
import React, { useEffect, useState } from "react";
import ProdItem from "@/app/components/ProdItem/ProdItem";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RiSurroundSoundLine } from "react-icons/ri";

export default function Category({ params }: { params: { category: string } }) {
    const [categoryList, setCategoryList] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const prods = await fetch("http://localhost:3000/api/products").then((res) => res.json());
            setCategoryList(prods);
        };
        fetchData();
    }, []);

    let icon;

    if (params.category === 'mouses') {
        icon = <FaMouse/>;
    } else if (params.category === 'keyboards') {
        icon = <FaRegKeyboard/>;
    } else if (params.category === 'headphones') {
        icon = <FaHeadset/>;
    } else if (params.category === 'mousepads') {
        icon = <FaRegSquare/>;
    } else if (params.category === 'monitors') {
        icon = <MdMonitor/>;
    } else if (params.category === 'speakers') {
        icon = <RiSurroundSoundLine/>;
    } 

    return (
        <>
            <div className="container mx-auto">
                <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-9 justify-center">
                    <div className="flex items-center w-8/12 justify-between">
                    {icon}
                    <p>{params.category.toUpperCase()}</p>
                    </div>
                </div>
                {
                    categoryList.map((item: Product) => {
                        return <ProdItem id={item.id} discount={item.discountPercentage} name={item.name} image={item.imageUrls} price={Number(item.basePrice)} />
                    })

                }
            </div>


        </>
    );
}
