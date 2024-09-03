import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", // Dodaj wagę, np. 400
});

export const metadata: Metadata = {
  title: "Lumi",
  description: "Effortlessly Convert Your SVG File into a 3D Obiect with Custom Materials, Lighting and Other Settings",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
     
    </html>
  );
}
