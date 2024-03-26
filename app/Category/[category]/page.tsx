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


//O nome do props sendo recebido neste component precisa ser o mesmo da pasta onde consta a page.tsx dele, se não vai aparecer como undefined
export default function Category({ params }: { params: { category: string } }) {
    const [categoryList, setCategoryList] = useState<Product[]>([]);
    const [categoryListFiltered, setCategoryListFiltered] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const prods = await fetch("http://localhost:3000/api/products").then((res) => res.json());
            setCategoryList(prods);
        };
        fetchData();
    }, []);

    let icon;
    let categoryID:string = ""

    if (params.category === 'mouses') {
        icon = <FaMouse/>;
        categoryID = "c6911b3d-988f-4fee-80d3-fda966c75c76"
    } else if (params.category === 'keyboards') {
        icon = <FaRegKeyboard/>;
        categoryID = "d41ade5e-514d-4c10-b9c4-53edff445c93"
    } else if (params.category === 'headphones') {
        icon = <FaHeadset/>;
        categoryID = "a97f5749-839a-4e8a-adbe-4ecba77b79db"
    } else if (params.category === 'mousepads') {
        icon = <FaRegSquare/>;
        categoryID = "9e7d953d-93c0-49dd-8095-bd2633623a1e"
    } else if (params.category === 'monitors') {
        icon = <MdMonitor/>;
        categoryID = "c4f795e6-eb5d-47cc-9aa1-7ff6d3d28cd1"
    } else if (params.category === 'speakers') {
        icon = <RiSurroundSoundLine/>;
        categoryID = "212de033-516d-4f76-80a7-98cf4f19c91f"
    } 

    useEffect(()=>{
        let filtered = categoryList.filter((item)=>{
            return item.categoryId === categoryID
        })
        setCategoryListFiltered(filtered)

    },categoryList)    

    return (
        <>
            <div className="container mx-auto">
                <div className="flex w-10/12 flex-wrap mx-auto">
                <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-9 justify-center">
                    <div className="flex items-center w-8/12 justify-between">
                    {icon}
                    <p>{params.category.toUpperCase()}</p>
                    </div>
                </div>
                </div>
                <div className="flex w-10/12 flex-wrap mx-auto">
                {
                    categoryListFiltered.map((item: Product) => {
                        return <ProdItem id={item.id} discount={item.discountPercentage} name={item.name} image={item.imageUrls} price={Number(item.basePrice)} slug={item.slug}/>
                    })

                }
                </div>
            </div>


        </>
    );
}
