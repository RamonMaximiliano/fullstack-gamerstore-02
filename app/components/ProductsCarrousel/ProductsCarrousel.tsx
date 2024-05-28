"use client"
import React from "react";
import ProdItem from "../ProdItem/ProdItem";

export default function ProductsCarrousel({item}:any) {

    return (
        <>
        <div className="flex w-[100%] mx-auto flex-wrap justify-between">
                {
                    item.map((item:any) => {
                        return <ProdItem id={item.id} key={item.id} discount={item.discountPercentage} name={item.name} image={item.imageUrls} price={Number(item.basePrice)} slug={item.slug}/>
                    })
                }
                </div> 
        </>
    );
}

/*
Tive que fazer o destructuring abaixo do prop item pois vinha um array de objetos
export default function ProductsCarrousel({item}:any) {

Assim não estava funcionando:
export default function ProductsCarrousel(item:any) {


*/
