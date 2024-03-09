import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown-light.css";
import { NavBar } from "@/components/molecules/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAPC 2024",
  description:
    "The 2024 edition of the Groningen Algorithmic Programming Competition",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fully-connected-graph.github.io/GAPC-2024/",
    title: "Groningen Algorithmic Programming Competition 2024",
    description:
      "The 2024 edition of the Groningen Algorithmic Programming Competition",
    images: [
      "https://fully-connected-graph.github.io/GAPC-2024/assets/thumbnails/banner.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="mt-0 m-auto max-w-4xl py-20 max-md:px-4 max-md:max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
