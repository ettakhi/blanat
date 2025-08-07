import { auth } from "@/auth";
import DealCard from "@/components/deals/DealCard";

export default async function Home() {
  const session = await auth();
  console.log("session", session);

  return (
    <div>
      <DealCard />
    </div>
  );
}
