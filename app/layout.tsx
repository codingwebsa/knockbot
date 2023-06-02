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
        className={`${cabinet.variable} font-cabinet text-white bg-[#151618]`}
      >
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
