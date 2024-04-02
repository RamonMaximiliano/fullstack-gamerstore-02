import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { NextAuthProvider } from "./providers/auth";
import Footer from "./components/Footer/Footer";

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
        <Header/>
        {children}   
        <Footer/>   
        </NextAuthProvider>
        </body>
    </html>
  );
}



/*

- responsivenes
- Loading pages 
- Shopping cart
- DB table purchases




https://fsw-store-ashy.vercel.app/
https://github.com/rafaelluiis2315/fsw-store/tree/main



*/