import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/navbar";

const cabinet = localFont({
  src: "../public/cabinet.ttf",
  variable: "--cabinet-font",
});

export const metadata = {
  title: "Knockbot",
  description: "Explore The whole new Era of AI Power Life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cabinet.variable} overflow-x-hidden font-cabinet text-white pb-96
         bg-[#151618] relative 
        before:content-[""] before:fixed before:h-[550px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-[#ffefd648] before:blur-3xl before:opacity-20 before:-z-20 before:-top-[250px] before:-right-[550px] 
        after:content-[""] after:fixed after:h-[500px] after:w-[700px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-radial after:from-white after:to-transparent after:blur-3xl after:opacity-30 after:-z-20 after:top-[350px] after:-left-[250px]
        `}
      >
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
