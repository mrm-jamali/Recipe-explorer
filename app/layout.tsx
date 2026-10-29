
import "./globals.css";
import { Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import type { ReactNode } from "react";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
   
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
          <Nav/>
        <Header/>
      
        {children}
        </body>
    </html>
  );
}
