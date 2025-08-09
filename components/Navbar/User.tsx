import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, getUsername } from "@/lib/user";
import { redirect } from "next/navigation";
import { CiLogout, CiUser, CiShoppingTag, CiBookmark } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/auth";
import Link from "next/link";

const menuItems = [
  {
    label: "Profile",
    icon: CiUser,
    href: "/profile",
    disabled: false,
  },
  {
    label: "My deals",
    icon: CiShoppingTag,
    href: "/profile/deals",
    disabled: false,
  },
  {
    label: "Deals saved",
    icon: CiBookmark,
    href: "/profile/deals/saved",
    disabled: true,
  },
];

const User = async () => {
  const session = await auth();

  if (!session?.user) return null;

  const username = getUsername(session.user.name);
  const initials = getInitials(session.user.name);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-1 border border-gray-100 rounded-xl px-2 py-1 hover:bg-gray-100 hover:cursor-pointer">
            <Avatar className="w-6 h-6">
              <AvatarImage
                src={session.user.image || ""}
                alt={`@${username}`}
              />
              <AvatarFallback className="">
                <small>{initials}</small>
              </AvatarFallback>
            </Avatar>
            <small className="text-gray-700">{username}</small>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DropdownMenuItem
                  key={item.label}
                  className="cursor-pointer"
                  disabled={item.disabled}
                  asChild={!item.disabled}
                >
                  {item.disabled ? (
                    <>
                      {item.label}
                      <DropdownMenuShortcut>
                        <IconComponent />
                      </DropdownMenuShortcut>
                    </>
                  ) : (
                    <Link href={item.href}>
                      {item.label}
                      <DropdownMenuShortcut>
                        <IconComponent />
                      </DropdownMenuShortcut>
                    </Link>
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <form
              action={async () => {
                "use server";
                await signOut();
                redirect("/");
              }}
            >
              <button className="cursor-pointer"> Log out</button>
            </form>
            <DropdownMenuShortcut>
              <CiLogout />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default User;
