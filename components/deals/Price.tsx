import { tCurrency } from "@/lib/type";
import { cn, getCurrencySymbol } from "@/lib/utils";
import React from "react";
import { HiOutlineTruck } from "react-icons/hi";

type PriceProps = {
  price: number;
  expired: boolean;
  deliveryFee: number | undefined;
  currency: tCurrency;
};

const Price = ({ price, currency, expired, deliveryFee }: PriceProps) => {
  const currencySymbol = getCurrencySymbol(currency);

  return (
    <div className="flex gap-2">
      {price && (
        <span
          className={cn(`font-bold text-2xl`, {
            "text-gray-500": expired,
            "text-red-600": !expired,
          })}
        >
          {price}
          {currencySymbol}
        </span>
      )}
      <span className="text-gray-400 text-sm flex items-center gap-1">
        <HiOutlineTruck className="h-5 w-5" />{" "}
        {deliveryFee ? `${deliveryFee}${currencySymbol}` : "Gratuit"}
      </span>
    </div>
  );
};

export default Price;
