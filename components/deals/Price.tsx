import { cn } from "@/lib/utils";
import React from "react";
import { HiOutlineTruck } from "react-icons/hi";

type PriceProps = {
  price: number;
  expired: boolean;
  deliveryFee: number | undefined;
};

const Price = ({ price, expired, deliveryFee }: PriceProps) => {
  return (
    <div className="flex gap-2">
      {price && (
        <span
          className={cn(`font-bold text-2xl`, {
            "text-gray-500": expired,
            "text-red-600": !expired,
          })}
        >
          {price}€
        </span>
      )}
      <span className="text-gray-400 text-sm flex items-center gap-1">
        <HiOutlineTruck className="h-5 w-5" />{" "}
        {deliveryFee ? `${deliveryFee}€` : "Gratuit"}
      </span>
    </div>
  );
};

export default Price;
