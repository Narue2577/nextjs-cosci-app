import type { Metadata } from "next";
import {  K2D } from "next/font/google";
import "../globals.css";



//const kanit = Kanit({
//  subsets: ['thai'],
//  weight:['100','200','300','400','500','600','700','800'],
// display: 'swap',
//});

const k2d = K2D({
  subsets: ['thai'],
  weight:['100','200','300','400','500','600','700','800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "ขายสินค้าของนักศึกษา ประจำปี 2568",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${k2d.className}`}
      >
      
        
        {children}
      </body>
    </html>
  );
}