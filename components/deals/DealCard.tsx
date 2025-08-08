import Image from "next/image";
import { Button } from "../ui/button";
import { HiOutlineTruck, HiExternalLink } from "react-icons/hi";
import AvatarImg from "../AvatarImg";
import Temperature from "./Temperature";
import PostedTime from "./PostedTime";
import { getInitials } from "@/lib/user";
import { isExpired } from "@/lib/utils/date";
import { cn } from "@/lib/utils";
import CardActions from "./CardActions";
import Price from "./Price";
import { tCurrency } from "@/lib/type";
import GoToDeal from "./GoToDeal";

export type tDealCard = {
  title: string;
  price: number;
  oldPrice?: number;
  currency: tCurrency;
  thumbnail: string;
  description: string;
  votes: number;
  storeName: string;
  codePromo?: string;
  postedDate: Date;
  expiryDate?: Date;
  deliveryFee?: number;
  commentsCount: number;
  sharedBy: {
    username: string;
    img: string;
    id: string;
  };
};

const DealCard = ({
  title,
  price,
  currency,
  thumbnail,
  codePromo,
  description,
  oldPrice,
  votes,
  deliveryFee,
  expiryDate,
  sharedBy,
  storeName,
  postedDate,
  commentsCount,
}: tDealCard) => {
  const expired = isExpired(expiryDate);

  return (
    <div
      className={cn(
        "bg-white grid grid-cols-3 md:grid-cols-4 border border-gray-200 rounded-lg overflow-hidden m-2 cursor-pointer group hover:shadow-md hover:inset-shadow-sm",
        {
          "opacity-50 grayscale": expired,
        }
      )}
    >
      {/* side thumbnail */}
      <div className="relative col-span-1 items-center justify-between md:justify-center flex flex-col h-full p-2">
        <Temperature votes={votes} className="flex md:hidden w-full" />
        <div className="flex items-center justify-center py-2">
          <Image
            src={thumbnail}
            alt="Deal"
            width={128}
            height={128}
            className={cn(
              `object-cover h-32 sm:h-44 w-32 sm:w-44 rounded-lg aspect-square border-gray-200 border-2 group-hover:scale-105 transition-transform duration-200 ease-in-out`,
              {
                grayscale: expired,
              }
            )}
          />
        </div>
        <CardActions
          commentsCount={commentsCount}
          className="flex md:hidden w-full sm:px-2 md:px-0"
        />
      </div>

      {/* details */}
      <div className="flex flex-col items-center col-span-2 md:col-span-3 p-2 h-full">
        <div className="w-full flex justify-between items-center">
          <Temperature votes={votes} className="hidden md:flex" />
          <PostedTime postedDate={postedDate} expiryDate={expiryDate} />
        </div>
        <div className="w-full h-full flex flex-col">
          <div
            className={cn(
              `font-semibold hover:text-blue-400 line-clamp-1 md:line-clamp-2 mt-2`,
              {
                "text-gray-500": expired,
                "text-gray-900": !expired,
              }
            )}
          >
            {title}
          </div>
          <Price
            price={price}
            oldPrice={oldPrice}
            expired={expired}
            deliveryFee={deliveryFee}
            currency={currency}
          />
          <div className="flex gap-2 items-center justify-between">
            <div className="text-sm text-gray-600 mt-1 gap-1 flex items-center">
              <span className="hidden md:inline-block italic">Available</span>
              <span className="italic">At</span>
              <span
                className={cn({
                  "text-gray-500": expired,
                  "text-blue-600": !expired,
                })}
              >
                {storeName}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 min-w-0">
              {/* label */}
              <span className="italic flex-shrink-0">
                <span className="hidden md:inline-block">shared</span> by
              </span>

              {/* avatar + name bubble */}
              <span className="flex items-center gap-1 border rounded-full pe-2 cursor-pointer min-w-0 bg-gray-100 hover:bg-gray-200">
                <AvatarImg
                  // className="w-5 h-5 shrink-0" /* avatar never shrinks */
                  img={sharedBy.img}
                  username={sharedBy.username}
                  fallback={getInitials(sharedBy.username)}
                />

                {/* username uses whatever space is left, then ellipses */}
                <span className="flex-1 min-w-0 truncate">
                  {sharedBy.username}
                </span>
              </span>
            </div>
          </div>
          <div className="line-clamp-1 md:line-clamp-2 text-sm text-gray-500 my-2">
            {description}
          </div>
          <div className="flex items-center justify-between mt-auto">
            <CardActions
              commentsCount={commentsCount}
              className="hidden md:flex"
            />
            <GoToDeal codePromo={codePromo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
