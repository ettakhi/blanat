import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log("session", session);

  return (
    <div>
      Hello
      <SignIn />
    </div>
  );
}
