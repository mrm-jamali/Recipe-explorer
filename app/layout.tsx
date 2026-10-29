
import "./globals.css";

import Nav from "@/components/Nav";
import type { ReactNode } from "react";
import Header from "@/components/Header";


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
   
    >
      <body className="min-h-full flex flex-col">
          <Nav/>
        <Header/>
      
        {children}
        </body>
    </html>
  );
}
