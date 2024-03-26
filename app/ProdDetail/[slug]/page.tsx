"use client"
import React, { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductsCarrousel from "../../components/ProductsCarrousel/ProductsCarrousel";
import ProdItem from "../../components/ProdItem/ProdItem";


//O nome do props sendo recebido neste component precisa ser o mesmo da pasta onde consta a page.tsx dele, se não vai aparecer como undefined
export default function ProdDetail({ params }: { params: { slug: string } }) {
    const [prodDetail, setProdDetail] = useState<Product>();
    const [prodList, setProdList] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const prods = await fetch("http://localhost:3000/api/products").then((res) => res.json());
            const endProd = prods.filter((item: Product) => {
                return item.slug === params.slug
            })
            setProdDetail(endProd[0])
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const prods = await fetch("http://localhost:3000/api/products").then((res) => res.json());
            const endProd = prods.filter((item: Product) => {
                return item.categoryId === prodDetail?.categoryId
            })
            const catSlice = endProd.slice(0, 4);
            setProdList(catSlice)
        }
        fetchData();
    }, [prodDetail])


    return (
        <>
            <div className="w-8/12 mx-auto">
                <p>
                    <div className="items-center bg-slate-900  w-10/12 mx-auto mt-8 rounded-xl">
                        <img src={prodDetail?.imageUrls[0]} className="w-[50%] mx-auto p-3"></img>
                    </div>
                    <div className="flex mx-auto justify-between w-10/12 mt-8 flex-wrap">
                        <div className="w-[120px] h-[120px] bg-slate-900 rounded-2xl items-center flex mt-1">
                            <div className="w-[190px] mx-auto">
                                <img src={prodDetail?.imageUrls[1]} className="m-auto my-auto max-w-full p-3"></img>
                            </div>
                        </div>
                        <div className="w-[120px] h-[120px] bg-slate-900 rounded-2xl items-center flex mt-1">
                            <div className="w-[190px] mx-auto">
                                <img src={prodDetail?.imageUrls[2]} className="m-auto my-auto max-w-full p-3"></img>
                            </div>
                        </div>
                        <div className="w-[120px] h-[120px] bg-slate-900 rounded-2xl items-center flex mt-1">
                            <div className="w-[190px] mx-auto">
                                <img src={prodDetail?.imageUrls[3]} className="m-auto my-auto max-w-full p-3"></img>
                            </div>
                        </div>
                        <div className="w-[120px] h-[120px] bg-slate-900 rounded-2xl items-center flex mt-1">
                            <div className="w-[190px] mx-auto">
                                <img src={prodDetail?.imageUrls[0]} className="m-auto my-auto max-w-full p-3"></img>
                            </div>
                        </div>
                    </div>

                    <div className="w-10/12 mx-auto my-4">
                        <h1 className="text-xl">{prodDetail?.name}</h1>
                        <div className="items-center flex my-2">
                            <p className="text-3xl font-bold">R$ {Number(prodDetail?.basePrice)}</p>
                            {/*                             {Number(prodDetail!.discountPercentage) > 0 &&
                                <div className="w-[70px] h-[30px] flex items-center bg-purple-700 justify-center ml-3 rounded-2xl">
                                    <div className="flex items-center justify-around w-9/12">
                                        <FaArrowDownLong />
                                        <p>{Number(prodDetail!.discountPercentage)}</p>
                                        <FaPercentage />
                                    </div>
                                </div>
                            } */}
                        </div>
                    </div>

                    <div className="w-10/12 mx-auto my-4 flex items-center">
                        <MdKeyboardArrowLeft size={30} className="border border-gray-500 rounded-sm cursor-pointer" />
                        <p className="mx-4">1</p>
                        <MdKeyboardArrowRight size={30} className="border border-gray-500 rounded-sm cursor-pointer" />
                    </div>

                    <div className="w-10/12 mx-auto my-4">
                        <h1 className="mb-2">Descrição</h1>
                        <p className="text-sm text-gray-400">{prodDetail?.description}</p><br />
                    </div>

                    <div className="w-10/12 mx-auto my-4">
                        <button className="p-4 bg-purple-800 w-[100%] rounded-lg my-2">ADICIONAR AO CARRINHO</button>
                        <p className="p-4 bg-gray-800 w-[100%] rounded-lg my-2">Banner</p>
                    </div>

                    <div className="flex w-10/12 mx-auto">
                        <p>Carrosel</p>
                        <ProductsCarrousel item={prodList} />
                    </div>
                </p>
            </div>
        </>
    );
}
