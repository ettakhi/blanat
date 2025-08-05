import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { CiCirclePlus, CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Blanat <span className="text-blue-500">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <div className="flex items-center gap-1">
            <Link href="/login">
              <Button className="cursor-pointer" variant="outline">
                <CiUser /> login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="cursor-pointer">
                <CiCirclePlus /> Sign up
              </Button>
            </Link>
          </div>
        </div>
        {/* mobile nav */}
        <div className="md:hidden text-black">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
