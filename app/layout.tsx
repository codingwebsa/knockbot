import localFont from "next/font/local";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Navbar from "@/components/navbar";

const cabinet = localFont({
  src: "../public/cabinet.ttf",
  variable: "--cabinet-font",
});

export const metadata: Metadata = {
  title: {
    default: "Knockbot",
    template: "%s | Knockbot",
  },
  description: "Explore The whole new Era of AI Power Life.",
  colorScheme: "light",
  creator: "Coding SA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#151618",
  openGraph: {
    title: "Knockbot - All AI tools in one place",
    description: "Explore The whole new Era of AI Power Life.",
    images: [
      {
        url: "/og.jpg",
        width: 1716,
        height: 1080,
        type: "image/jpg",
        alt: "Knock Bot",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cabinet.variable} relative overflow-x-hidden bg-[#151618] pb-96
         font-cabinet text-white 
        before:fixed before:-right-[550px] before:-top-[250px] before:-z-20 before:h-[550px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-[#ffefd648] before:opacity-20 before:blur-3xl before:content-[""] 
        after:fixed after:-left-[250px] after:top-[350px] after:-z-20 after:h-[500px] after:w-[700px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-radial after:from-white after:to-transparent after:opacity-30 after:blur-3xl after:content-[""]
        `}
      >
        <div>
          <Navbar />
          <main>{children}</main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
