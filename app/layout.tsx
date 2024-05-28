import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { NextAuthProvider } from "./providers/auth";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./providers/cartcontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack GamerStore",
  description: "Uma GamerStore completa",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
        <CartProvider>
        <Header/>
        {children}   
        <Footer/>  
        </CartProvider> 
        </NextAuthProvider>
        </body>
    </html>
  );
}



/*

- Loading pages 
- Display purchase message successfull
- No Header, adicionar efeito de contador no icono do carrinho caso o carrinho não esteja vazio
- Adicionar efeito de desfoque no resto quando abre o menu ou o carrinho 
- Tests authenticated purchase etc

https://fsw-store-ashy.vercel.app/
https://github.com/rafaelluiis2315/fsw-store/tree/main
https://www.figma.com/file/Y8jmabSZXxAobeUJQdI4bm/FSW-Store-[Live]?type=design&node-id=89-379&mode=design

*/