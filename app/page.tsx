"use client"
import Image from "next/image";
import fiftyoff from "../public/images/banner-55off.png";
import fiftyoff1 from "../public/images/banner-55off1.png";
import fiftyoff2 from "../public/images/banner-55off2.png";
import fones from "../public/images/banner-fones.png";
import fones1 from "../public/images/banner-fones1.png";
import fones2 from "../public/images/banner-fones2.png";
import mouses from "../public/images/banner-mouses.png";
import mouses1 from "../public/images/banner-mouses1.png";
import mouses2 from "../public/images/banner-mouses2.png";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RiSurroundSoundLine } from "react-icons/ri";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const prods = await fetch("http://localhost:3000/api/products").then((res) => res.json());
      setProductsList(prods);
    };
    fetchData();
  }, []);

  return (
    <>
      {/*     FIRST BANNER
 */}      <div className="container mx-auto hidden lg:flex">
        <div className="mx-auto w-11/12 h-[150px] my-6 bg-purple-900 flex items-center text-center rounded-lg">
          <div className="flex mx-auto justify-between w-2/5 items-center">
            <Image src={fiftyoff1} alt="Fifty Off Banner" className="w-[135px] h-[90px]" />
            <Image src={fiftyoff2} alt="Fifty Off Banner" className="w-[120px] h-[130px]" />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:hidden">
        <Image src={fiftyoff} alt="Fifty Off Banner" className="mx-auto w-[340px] h-[150px] my-6" />
      </div>
      {/*     FIRST BANNER
 */}

      <div className="grid grid-cols-2 container mx-auto items-center text-center">
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
 */}      <div className="container mx-auto hidden lg:flex">
        <div className="mx-auto w-11/12 h-[150px] my-6 bg-purple-900 flex items-center text-center rounded-lg">
          <div className="flex mx-auto justify-between w-2/5 items-center">
            <Image src={fones2} alt="Fifty Off Banner" className="w-[130px] h-[130px]" />
            <Image src={fones1} alt="Fifty Off Banner" className="w-[145px] h-[120px]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:hidden">
        <Image src={fones} alt="Fones Banner" className="mx-auto w-[340px] h-[150px] my-6" />
      </div>
      {/*  SECOND BANNER
 */}

      {/* THIRD BANNER */}

      <div className="container mx-auto hidden lg:flex">
        <div className="mx-auto w-11/12 h-[150px] my-6 bg-purple-900 flex items-center text-center rounded-lg">
          <div className="flex mx-auto justify-between w-2/5 items-center">
            <Image src={mouses1} alt="Fifty Off Banner" className="w-[140px] h-[120px]" />
            <Image src={mouses2} alt="Fifty Off Banner" className="w-[120px] h-[120px]" />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:hidden">
        <Image src={mouses} alt="Mouses Banner" className="mx-auto w-[340px] h-[150px] my-6" />
      </div>
      {/* THIRD BANNER */}
    </>
  );
}


