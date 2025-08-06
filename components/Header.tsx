import Link from "next/link";
import React from "react";
import { CiCirclePlus, CiUser } from "react-icons/ci";
import Connect from "@/components/Connect";
import Nav from "@/components/Navbar/Nav";
import MobileNav from "@/components/Navbar/MobileNav";

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
            <Connect>
              <CiUser /> login
            </Connect>

            <Connect variant="default">
              <CiCirclePlus /> Sign up
            </Connect>
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
