import { auth } from "@/auth";
import DealCard from "@/components/deals/DealCard";
import { DEAL_DESCRIPTION, DEALS_MOCK, IMG_HAKIM } from "@/lib/constants";

export default async function Home() {
  // const session = await auth();

  return (
    <div>
      {DEALS_MOCK.map((deal, index) => (
        <DealCard key={index} {...deal} />
      ))}
    </div>
  );
}
