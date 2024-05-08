import React, { useState } from "react";

export default function Cart() {

    return (
        <>
            <div className="bg-gray-800">
                <div className="flex w-8/12 flex-wrap mx-auto mt-8">
                    <div className="border-2 w-[200px] h-[45px] flex rounded-3xl border-purple-600 my-4 justify-center">
                        <div className="flex items-center w-8/12 justify-between">
                       {/*      <MdOutlineDiscount size={18} className="mr-3" /> */}
                            <p>Descontos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

