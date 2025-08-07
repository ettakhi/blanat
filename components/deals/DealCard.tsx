import Image from "next/image";
import { Button } from "../ui/button";
import { HiOutlineTruck, HiExternalLink } from "react-icons/hi";
import AvatarImg from "../AvatarImg";
import { IMG_HAKIM, ONE_MONTH_AGO } from "@/lib/constants";
import Temperature from "./Temperature";
import PostedTime from "./PostedTime";
import { getInitials } from "@/lib/user";

export type tDealCard = {
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  storeName: string;
  deliveryFee?: number;
  sharedBy: {
    username: string;
    img: string;
    id: string;
  };
};

const DealCard = ({
  title,
  price,
  image,
  description,
  oldPrice,
  deliveryFee,
  sharedBy,
  storeName,
}: tDealCard) => {
  return (
    <div className="bg-white grid grid-cols-3 md:grid-cols-4 h-60 md:h-64 border border-gray-200 rounded-lg overflow-hidden m-2">
      {/* side thumbnail */}
      <div className="relative col-span-1 h-full">
        <Image
          src={image}
          alt="Deal"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 20vw, 10rem" /* optional hint */
        />
      </div>

      {/* details */}
      <div className="flex flex-col items-center col-span-2 md:col-span-3 p-2">
        <div className="w-full flex justify-between items-center">
          <Temperature votes={344} />
          <PostedTime postedTime={ONE_MONTH_AGO} />
        </div>
        <div className="w-full">
          <div className="font-semibold text-gray-900 line-clamp-2 mt-2">
            {title}
          </div>
          <div className="flex gap-2">
            {price && (
              <span className="text-red-600 font-bold text-2xl">{price}€</span>
            )}
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <HiOutlineTruck className="h-5 w-5" />{" "}
              {deliveryFee ? `${deliveryFee}€` : "Gratuit"}
            </span>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="text-sm text-gray-600 mt-1 gap-1 flex items-center">
              <span className="hidden md:inline-block italic">Available</span>
              <span className="italic">At</span>
              <span className="text-blue-600">{storeName}</span>
            </div>
            <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <span className="italic">
                <span className="hidden md:inline-block">shared</span> by
              </span>
              <span className="flex items-center gap-1 border rounded-full pe-2 bg-gray-100 cursor-pointer hover:bg-gray-200">
                <AvatarImg
                  img={sharedBy.img}
                  username={sharedBy.username}
                  fallback={getInitials(sharedBy.username)}
                />
                <span>{sharedBy.username}</span>
              </span>
            </div>
          </div>
          <div className="line-clamp-1 md:line-clamp-2 text-sm text-gray-500 mt-2">
            {description}
          </div>
          <div className="flex items-center justify-between mt-3">
            <div id="actions">shared</div>
            <div id="share">
              <Button
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white"
                size="sm"
              >
                Voir le deal <HiExternalLink className="inline-block ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
