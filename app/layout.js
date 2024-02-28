"use client"
import { Inter, Kanit } from "next/font/google";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["latin"], weight: ["400", "700"] });





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={kanit.className}>
      
        {children}</body>
      
    </html>
  );
}
