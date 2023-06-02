import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/navbar";

const cabinet = localFont({
  src: "../public/cabinet.ttf",
  variable: "--cabinet-font",
});

export const metadata = {
  title: "Knockbot",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cabinet.variable} font-cabinet text-white bg-[#151618] relative before:content-[""] before:absolute before:h-[500px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:opacity-30 before:-z-20 before:-top-[250px] before:-right-[550px] after:content-[""] after:absolute after:h-[500px] after:w-[700px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-radial after:from-white after:to-transparent after:blur-3xl after:opacity-30 after:-z-20 after:top-[350px] after:-left-[250px] overflow-x-hidden`}
      >
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
