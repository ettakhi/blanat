"use server";

import { prisma } from "@/prisma";
import { Deal } from "@prisma/client";
// import { DEALS_MOCK } from "./constants";
const DEALS_MOCK = [] as Deal[]; // TODO for silent linting

export const addToDBAction = async () => {
  const isThereDeals = await prisma.deal.findMany();
  if (!isThereDeals.length) {
    console.log("No deals found");
    await prisma.deal.createMany({
      data: DEALS_MOCK,
    });
  } else {
    console.log("Deals already exist", isThereDeals);
  }

  // Add your database logic here
};
