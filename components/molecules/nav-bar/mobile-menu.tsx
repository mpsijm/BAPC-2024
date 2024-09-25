"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface MobileMenuProps {
  links: {
    name: string;
    url: string;
    links?: MobileMenuProps["links"];
  }[];
}

const MobileMenu: FC<MobileMenuProps> = ({ links }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="sm:hidden">
        <MenuIcon className="w-8 h-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="sm:hidden">
        {links.map((link, index) => (
          <>
            <DropdownMenuItem key={link.url}>
              <Link key={link.url} href={link.url} className="font-jbMono">
                {link.name}
              </Link>
            </DropdownMenuItem>
            {(link.links ?? []).map((deepLink, index) => (
              <DropdownMenuItem key={deepLink.url}>
                <Link
                  key={deepLink.url}
                  href={deepLink.url}
                  className="font-jbMono"
                >
                  {"->"} {deepLink.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
