import Link from "next/link";
import { CiCirclePlus, CiMenuFries, CiUser } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Connect from "@/components/Connect";
import Links from "./Links";
import { auth } from "@/auth";
import User from "./User";

const MobileNav = async () => {
  const session = await auth();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}

        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <SheetTitle asChild>
              <h1 className="text-4xl font-semibold">
                Blanat<span className="text-blue-500">.</span>
              </h1>
            </SheetTitle>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          <Links />
          {!session?.user && (
            <div className="flex flex-col items-center justify-center gap-2">
              <Connect className="w-32">
                <CiUser /> login
              </Connect>
              <Connect className="w-32" variant="default">
                <CiCirclePlus /> Sign up
              </Connect>
            </div>
          )}
          <User />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
