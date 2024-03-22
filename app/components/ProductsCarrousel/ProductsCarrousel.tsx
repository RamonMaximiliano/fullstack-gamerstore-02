"use client"
import React from "react";
import ProdItem from "../ProdItem/ProdItem";

export default function ProductsCarrousel({item}:any) {

    return (
        <>
        <div className="flex w-8/12	mx-auto ">
                {
                    item.map((item:any) => {
                        return <ProdItem id={item.id} discount={item.discountPercentage} name={item.name} image={item.imageUrls} price={Number(item.basePrice)} />
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
