import { readFileSync } from "fs";
import Link from "next/link";
import { FC, useState } from "react";
import MobileMenu from "./mobile-menu";
import { MenuIcon } from "lucide-react";

export const NavBar: FC = async () => {
  async function create() {
    return JSON.parse(readFileSync("public/navlinks.json", "utf-8")) as {
      name: string;
      url: string;
    }[];
  }

  const links = await create();

  return (
    <nav className="fixed top-0 h-20 w-screen mb-4 flex items-center justify-center z-10 bg-white bg-opacity-[50] bg-blend-soft-light shadow-md shadow-bapcblue ">
      <div className="w-full p-4 flex gap-8 items-center text-bapcblue max-lg:px-4 max-lg:max-w-full">
        <Link className="flex-1" href="/">
          <img src="/assets/logo.svg" alt="logo" className="h-14" />
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="group py-6 transition duration-50 font-jbMono max-sm:hidden"
          >
            {link.name}
            <span className="block mt-1 max-w-0 group-hover:max-w-full duration-200 h-0.5 bg-gradient-to-r from-gray-200 to-bapcblue"></span>
          </Link>
        ))}
        <MobileMenu links={links} />
      </div>
    </nav>
  );
};
