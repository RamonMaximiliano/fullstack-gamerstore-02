"use client"
import { ReactNode, createContext } from "react";

export const CartContext = createContext({} as any);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const test = "Hello there"

    // Provider implementation
    return (
        <CartContext.Provider
          value={{
            test
          }}
        >
          {children}
        </CartContext.Provider>
      );

};
