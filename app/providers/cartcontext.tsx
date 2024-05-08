"use client"
import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext({} as any);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);

    // Provider implementation
    return (
        <CartContext.Provider
          value={{
            setOpen,
            open
          }}
        >
          {children}
        </CartContext.Provider>
      );

};
