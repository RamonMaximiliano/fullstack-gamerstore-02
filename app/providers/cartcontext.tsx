"use client"
import { Product } from "@prisma/client";
import { ReactNode, createContext, useEffect, useState } from "react";

export const CartContext = createContext({} as any);

type cartItem = {
  id: string,
  name: string;
  quantity: number,
  price: number,
  imageUrls: string;
  discountPercentage: number;
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<cartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const prods = await fetch("/api/products").then((res) => res.json());
      setProducts(prods);
    };
    fetchData();
  }, []);


  // Provider implementation
  return (
    <CartContext.Provider
      value={{
        setOpen,
        open,
        products,
        cartProducts,
        setCartProducts,
        menu,
        setMenu
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
