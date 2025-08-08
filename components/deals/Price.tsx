import { tCurrency } from "@/lib/type";
import { cn, getCurrencySymbol } from "@/lib/utils";
import React from "react";
import { HiOutlineTruck } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";

type PriceProps = {
  price: number;
  oldPrice?: number;
  expired: boolean;
  deliveryFee: number | undefined;
  currency: tCurrency;
};

const Price = ({
  price,
  oldPrice,
  currency,
  expired,
  deliveryFee,
}: PriceProps) => {
  const currencySymbol = getCurrencySymbol(currency);

  const discountPercentage =
    oldPrice && price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-1 md:gap-2">
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
        {oldPrice && (
          <small className="text-gray-600 text-base line-through">
            {oldPrice}
            {currencySymbol}
          </small>
        )}
        {discountPercentage && (
          <Badge
            variant={"secondary"}
            className="bg-green-100 text-green-900 dark:bg-green-600 p-0.5"
          >
            -{discountPercentage}%
          </Badge>
        )}
      </div>
      {deliveryFee !== undefined && (
        <span className="text-gray-400 text-sm flex items-center gap-1">
          <HiOutlineTruck className="h-5 w-5" />
          {deliveryFee === 0 ? "Gratuit" : `${deliveryFee}${currencySymbol}`}
        </span>
      )}
    </div>
  );
};

export default Price;
