import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack GamerStore",
  description: "Uma GamerStore completa",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}      
        </body>
    </html>
  );
}



/*

VIDEO 1:
- Goodle Auth
- Next auth
- Regular auth
- Database


*/