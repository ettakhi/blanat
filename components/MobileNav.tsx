"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";
import { CiCirclePlus, CiMenuFries, CiUser } from "react-icons/ci";
import { links } from "./Nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Omra <span className="text-blue-500">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
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
          <div className="flex flex-col items-center justify-center gap-2">
            <Link href="/login">
              <Button className="cursor-pointer w-32" variant="outline">
                <CiUser />
                login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="cursor-pointer w-32">
                <CiCirclePlus /> Sign up
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
