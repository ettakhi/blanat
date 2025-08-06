import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signIn } from "@/auth";
import { FacebookIcon, GoogleIcon } from "@/lib/icons";
import { Button } from "./ui/button";
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";

const Connect = ({
  className,
  children,
  variant = "outline",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof Button>["variant"];
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={clsx("cursor-pointer", className)} variant={variant}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connectez-vous via un réseau social</DialogTitle>
          <div className="grid sm:space-x-2 space-y-2 sm:space-y-0 sm:grid-cols-2 my-5">
            <form
              className="flex"
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button
                type="submit"
                className="grow hover:bg-gray-200 border text-black space-x-2 bg-gray-100 active:bg-blue-700 cursor-pointer"
              >
                <GoogleIcon />
                <span className="">Google</span>
              </Button>
            </form>
            <form
              className="flex"
              action={async () => {
                "use server";
                await signIn("facebook");
              }}
            >
              <Button
                type="submit"
                className="grow hover:bg-blue-600 border-2 border-blue-500 space-x-2 bg-blue-500 active:bg-blue-700 cursor-pointer"
              >
                <FacebookIcon />
                <span className="">Facebook</span>
              </Button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Connect;
