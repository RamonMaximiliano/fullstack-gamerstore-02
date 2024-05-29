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
            {/*Essas divs abaixo é para jogar o footer sempre para o bottom total idependente de quantos pedidos na pagina de pedidos ou do tamanho do conteudo na tela*/}
            <div className="flex flex-col h-screen">
              <Header />
              <div className="flex-1">
                {children}
              </div>
              <Footer />
            </div>
          </CartProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}


/*

Project based on:
https://www.figma.com/file/Y8jmabSZXxAobeUJQdI4bm/FSW-Store-[Live]?type=design&node-id=89-379&mode=design

*/