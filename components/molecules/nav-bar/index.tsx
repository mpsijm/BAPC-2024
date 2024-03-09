import { cn } from "@/lib/utils";
import { readFileSync } from "fs";
import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = async () => {
    async function create() {
        return JSON.parse(readFileSync("public/navlinks.json", "utf-8")) as {
            name: string;
            url: string;
        }[];
    }

    const links = await create();

    return (
        <nav className="fixed top-0 h-20 w-full mb-4 shadow-sm flex items-center justify-center z-10 bg-black bg-opacity-[50] bg-blend-soft-light">
            <div className="w-full max-w-4xl flex gap-4 items-center text-gray-100 max-md:px-4 max-md:max-w-full">
                <Link className="flex-1" href="/">
                    <div className="flex flex-col items-start gap-1">
                        <img src="/GAPC-2024/assets/logo.png" alt="logo" className="h-10" />
                        <span className="text-sm font-jbMono">gapc 2024</span>
                    </div>
                </Link>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className="group py-6 transition duration-50"
                    >
                        {link.name}
                        <span className="block mt-1 max-w-0 group-hover:max-w-full duration-200 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></span>
                    </Link>
                ))}
            </div>
        </nav >
    );
};
