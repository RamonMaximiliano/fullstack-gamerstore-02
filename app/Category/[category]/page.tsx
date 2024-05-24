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
        categoryID = "b085fc16-2c7f-4a4b-8e2e-b7e5a91453b8"
    } else if (params.category === 'keyboards') {
        icon = <FaRegKeyboard/>;
        categoryID = "5fa84218-5b10-4929-a842-b78b88cf563f"
    } else if (params.category === 'headphones') {
        icon = <FaHeadset/>;
        categoryID = "593ee0da-c702-4583-85df-f5b2c3900c25"
    } else if (params.category === 'mousepads') {
        icon = <FaRegSquare/>;
        categoryID = "628413bf-81ea-4c6b-8c3d-fc9a09b2b204"
    } else if (params.category === 'monitors') {
        icon = <MdMonitor/>;
        categoryID = "64cd499d-69fa-40e9-a6c7-7bd9a93eb23a"
    } else if (params.category === 'speakers') {
        icon = <RiSurroundSoundLine/>;
        categoryID = "aac7bfba-4ff6-43d5-ba37-143d4a6dbaed"
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
