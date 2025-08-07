import Image from "next/image";
import { Button } from "../ui/button";
import { HiOutlineTruck, HiExternalLink } from "react-icons/hi";
import AvatarImg from "../AvatarImg";
import Temperature from "./Temperature";
import PostedTime from "./PostedTime";
import { getInitials } from "@/lib/user";

export type tDealCard = {
  title: string;
  price: number;
  oldPrice?: number;
  thumbnail: string;
  description: string;
  votes: number;
  storeName: string;
  postedDate: Date;
  expiryDate?: Date;
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
  thumbnail,
  description,
  oldPrice,
  votes,
  deliveryFee,
  expiryDate,
  sharedBy,
  storeName,
  postedDate,
}: tDealCard) => {
  return (
    <div className="bg-white grid grid-cols-3 md:grid-cols-4  border border-gray-200 rounded-lg overflow-hidden m-2 cursor-pointer group hover:shadow-md hover:inset-shadow-sm">
      {/* side thumbnail */}
      <div className="relative col-span-1 items-center justify-between flex flex-col h-full p-2">
        <Temperature votes={votes} className="flex md:hidden w-full" />
        <div className="flex items-center justify-center py-2">
          <Image
            src={thumbnail}
            alt="Deal"
            width={176}
            height={176}
            className="object-cover h-36 sm:h-44 w-36 sm:w-44 rounded-lg aspect-square border-gray-200 border-2 group-hover:scale-105 transition-transform duration-200 ease-in-out"
          />
        </div>
      </div>

      {/* details */}
      <div className="flex flex-col items-center col-span-2 md:col-span-3 p-2 h-full">
        <div className="w-full flex justify-between items-center">
          <Temperature votes={votes} className="hidden md:flex" />
          <PostedTime postedDate={postedDate} />
        </div>
        <div className="w-full h-full flex flex-col">
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
          <div className="line-clamp-1 md:line-clamp-2 text-sm text-gray-500 my-2">
            {description}
          </div>
          <div className="flex items-center justify-between mt-auto">
            <div id="actions">shared</div>
            <div id="share">
              <Button
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-2xl"
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
