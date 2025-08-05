"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";

export const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "services", href: "/services" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={cn(
            {
              "text-blue-500 border-b-2 border-blue-500":
                link.href === pathname,
            },
            "capitalize font-medium hover:text-blue-950 transition-all"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
