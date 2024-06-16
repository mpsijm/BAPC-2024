import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown-light.css";
import { NavBar } from "@/components/molecules/nav-bar";
import Footer from "@/components/molecules/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAPC 2024",
  description:
    "The 2024 edition of the Groningen Algorithmic Programming Competition",
  icons: [{ url: "/assets/favicon.png", rel: "icon", type: "image/png" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://2024.bapc.eu/",
    title: "Benelux Algorithmic Programming Competition 2024",
    description:
      "The 2024 edition of the Benelux Algorithmic Programming Competition",
    images: ["https://2024.bapc.eu/assets/thumbnails/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen"}>
        <NavBar />
        <main className="mt-0 m-auto max-w-2xl py-20 max-lg:px-4 max-lg:max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
