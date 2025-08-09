import DealCard from "@/components/deals/DealCard";
import { prisma } from "@/prisma";

export const revalidate = false; // Cache indefinitely until manually revalidated, the default

export default async function Home() {
  const deals = await prisma.deal.findMany({
    include: {
      sharedBy: {
        select: {
          image: true,
          id: true,
          username: true,
        },
      },
    },
  });
  // console.log("deals", deals);

  return (
    <div>
      {deals.map((deal) => (
        <DealCard key={deal.id} {...deal} />
      ))}
    </div>
  );
}
