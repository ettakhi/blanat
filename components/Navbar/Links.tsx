"use client";
import React from "react";
import { links } from "./Nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";

const Links = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link
          href={link.href || "#"}
          key={index}
          className={cn(
            {
              "text-blue-500 border-b-2 border-blue-500":
                link.href === pathname,
            },
            "text-xl capitalize hover:text-blue-950 transition-all"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Links;
