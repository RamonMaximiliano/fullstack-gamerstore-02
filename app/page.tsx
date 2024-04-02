"use client"
import Image from "next/image";
import fiftyoff from "../public/images/banner-55off.png";
import fones from "../public/images/banner-fones.png";
import mouses from "../public/images/banner-mouses.png";
import banner1 from "../public/images/banner1.png";
import banner2 from "../public/images/banner2.png";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RiSurroundSoundLine } from "react-icons/ri";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductsCarrousel from "./components/ProductsCarrousel/ProductsCarrousel";
import { MdOutlineDiscount } from "react-icons/md";

export default function Home() {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [keyboardsList, setKeyboardsList] = useState<Product[]>([]);
  const [mouseList, setMouseList] = useState<Product[]>([]);
  const [discountList, setDiscountList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const prods = await fetch("http://localhost:3000/api/products").then((res) => res.json());
      setProductsList(prods);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const mouses = productsList.filter((item) => {
      return item.categoryId == "c6911b3d-988f-4fee-80d3-fda966c75c76"
    })
    const newmouses = mouses.slice(0, 4);
    setMouseList(newmouses)
  }, [productsList]);

  useEffect(() => {
    const keyboards = productsList.filter((item) => {
      return item.categoryId == "d41ade5e-514d-4c10-b9c4-53edff445c93"
    })
    const newkeyboards = keyboards.slice(0, 4);
    setKeyboardsList(newkeyboards)
  }, [productsList]);

  useEffect(() => {
    const discount = productsList.filter((item) => {
      return item.discountPercentage == 15
    })
    const newdiscount = discount.slice(0, 4);
    setDiscountList(newdiscount)
  }, [productsList]);

  return (
    <>
      {/*     FIRST BANNER
 */}
      <div className="container mx-auto hidden lg:flex items-center text-center">
        <Image src={banner1} alt="Fifty Off Banner" className="rounded-xl w-10/12 mx-auto my-6" />
      </div>
      <div className="container mx-auto lg:hidden">
        <Image src={fiftyoff} alt="Fifty Off Banner" className="mx-auto w-[340px] h-[150px] my-6" />
      </div>
      {/*     FIRST BANNER
 */}

      <div className="flex w-8/12 flex-wrap mx-auto mt-8">
        <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-4 justify-center">
          <div className="flex items-center w-8/12 justify-between">
            <MdOutlineDiscount size={18} className="mr-3" />
            <p>Descontos</p>
          </div>
        </div>
      </div>
      <div className="container w-12/12 mx-auto">
        <div className="w-10/12 mx-auto items-center">
          <ProductsCarrousel item={discountList} />
        </div>
      </div>

      <div className="grid grid-cols-2 container mx-auto items-center text-center my-10">
        <Link href={"/Category/keyboards"}>
          <div className="flex items-center p-2 justify-center border border-gray-500 rounded-xl w-2/4 mx-auto my-2 cursor-pointer">
            <FaRegKeyboard className="mr-4" />
            <p>Teclados</p>
          </div>
        </Link>

        <Link href={"/Category/headphones"}>
          <div className="flex items-center p-2 justify-center border border-gray-500 rounded-xl w-2/4 mx-auto my-2 cursor-pointer">
            <FaHeadset className="mr-4" />
            <p>Fones</p>
          </div>
        </Link>

        <Link href={"/Category/monitors"}>
          <div className="flex items-center p-2 justify-center border border-gray-500 rounded-xl w-2/4 mx-auto my-2 cursor-pointer">
            <MdMonitor className="mr-4" />
            <p>Monitores</p>
          </div>
        </Link>

        <Link href={"/Category/mouses"}>
          <div className="flex items-center p-2 justify-center border border-gray-500 rounded-xl w-2/4 mx-auto my-2 cursor-pointer">
            <FaMouse className="mr-4" />
            <p>Mouses</p>
          </div>
        </Link>

        <Link href={"/Category/mousepads"}>
          <div className="flex items-center p-2 justify-center border border-gray-500 rounded-xl w-2/4 mx-auto my-2 cursor-pointer">
            <FaRegSquare className="mr-4" />
            <p>Mousespads</p>
          </div>
        </Link>

        <Link href={"/Category/speakers"}>
          <div className="flex items-center p-2 justify-center border border-gray-500 rounded-xl w-2/4 mx-auto my-2 cursor-pointer">
            <RiSurroundSoundLine className="mr-4" />
            <p>Speakers</p>
          </div>
        </Link>
      </div>

      {/*  SECOND BANNER
 */}
      <div className="container mx-auto hidden lg:flex justify-between my-10">
        <div className="flex mx-auto justify-between w-10/12 items-center text-center">
          <Image src={fones} alt="Fifty Off Banner" className="w-[49%]" />
          <Image src={mouses} alt="Fifty Off Banner" className="w-[49%]" />
        </div>

      </div>

      <div className="container mx-auto lg:hidden">
        <Image src={fones} alt="Fones Banner" className="mx-auto w-[340px] h-[150px] my-6" />
      </div>
      {/*  SECOND BANNER
 */}

      <Link href={"/Category/mouses"}>
        <div className="flex w-8/12 flex-wrap mx-auto mt-8">
          <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-4 justify-center">
            <div className="flex items-center w-8/12 justify-between">
              <FaMouse size={18} className="mr-3" />
              <p>Mouses</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="container w-12/12 mx-auto">
        <div className="w-10/12 mx-auto items-center">
          <ProductsCarrousel item={mouseList} />
        </div>
      </div>

      {/* THIRD BANNER */}
      <div className="container mx-auto hidden lg:flex items-center text-center">
        <Image src={banner2} alt="Fifty Off Banner" className="rounded-xl w-10/12 mx-auto my-6" />
      </div>

      <div className="container mx-auto lg:hidden">
        <Image src={mouses} alt="Mouses Banner" className="mx-auto w-[340px] h-[150px]" />
      </div>
      {/* THIRD BANNER */}
      <Link href={"/Category/keyboards"}>
        <div className="flex w-8/12 flex-wrap mx-auto cursor-pointer mt-8">
          <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-4 justify-center">
            <div className="flex items-center w-8/12 justify-between">
              <FaRegKeyboard size={18} className="mr-3" />
              <p>Teclados</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="container w-12/12 mx-auto mb-14">
        <div className="w-10/12 mx-auto items-center">
        <ProductsCarrousel item={keyboardsList} />
        </div>
      </div>
    </>
  );
}


