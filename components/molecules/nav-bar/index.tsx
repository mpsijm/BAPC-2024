import { readFileSync } from "fs";
import Link from "next/link";
import { FC } from "react";
import MobileMenu from "./mobile-menu";
import { cn } from "@/lib/utils";

export interface MenuLink {
  name: string;
  url?: string;
  links?: MenuLink[];
}

export const NavBar: FC = async () => {
  async function create() {
    return JSON.parse(
      readFileSync("public/navlinks.json", "utf-8"),
    ) as MenuLink[];
  }

  const links = await create();

  return (
    <nav className="fixed top-0 h-20 w-screen mb-4 flex items-center justify-center z-10 bg-white bg-opacity-[50] bg-blend-soft-light shadow-md shadow-bapcblue ">
      <div className="w-full py-4 px-16 flex gap-8 items-center text-bapcblue max-lg:px-6 max-lg:max-w-full">
        <Link className="flex-1" href="/">
          <img src="/assets/logo.svg" alt="logo" className="h-14" />
        </Link>
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url ?? "#"}
            className={cn(
              "group py-6 transition duration-50 font-jbMono max-sm:hidden hover:font-bold",
              !link?.url &&
                "text-blue-400 italic cursor-default hover:font-normal",
            )}
          >
            {link.name}
            {link.links && "°"}
            <span className="block mt-1 max-w-0 group-hover:max-w-full duration-200 h-0.5 bg-gradient-to-r from-gray-200 to-bapcblue"></span>
            {link.links && (
              <div className="absolute z-20 -translate-x-10 top-14 bg-white w-50 p-4 flex flex-col group-hover:opacity-100 opacity-0 duration-200 rounded-md drop-shadow-md">
                {link.links.map((deepLink) => (
                  <Link
                    key={deepLink.url}
                    href={deepLink.url ?? "#"}
                    className="font-jbMono hover:font-bold"
                  >
                    {"->"} {deepLink.name}
                  </Link>
                ))}
              </div>
            )}
          </Link>
        ))}
        <MobileMenu links={links} />
      </div>
    </nav>
  );
};
