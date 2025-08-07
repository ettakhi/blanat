import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiShare2, CiBookmark, CiDroplet } from "react-icons/ci";

interface DealCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  store: string;
  description: string;
  temperature: number;
  comments: number;
  postedTime: string;
  isFree?: boolean;
  couponCode?: string;
  href: string;
}

const DealCard: React.FC<DealCardProps> = ({
  id,
  title,
  image,
  price,
  originalPrice,
  discount,
  store,
  description,
  temperature,
  comments,
  postedTime,
  isFree = false,
  couponCode,
  href,
}) => {
  const getTemperatureColor = (temp: number) => {
    if (temp >= 500) return "text-red-500";
    if (temp >= 200) return "text-orange-500";
    if (temp >= 100) return "text-yellow-500";
    return "text-blue-500";
  };

  const getTemperatureBgColor = (temp: number) => {
    if (temp >= 500) return "bg-red-500";
    if (temp >= 200) return "bg-orange-500";
    if (temp >= 100) return "bg-yellow-500";
    return "bg-blue-500";
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Header with temperature and time */}
        <div className="flex items-center justify-between p-3 pb-2">
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1 ${getTemperatureBgColor(
                temperature
              )} rounded-full px-2 py-1`}
            >
              <span className="text-white text-xs font-medium">
                {temperature}°
              </span>
            </div>
            <CiDroplet className="w-4 h-4 text-orange-500" />
          </div>
          <span className="text-xs text-gray-400">{postedTime}</span>
        </div>

        {/* Content */}
        <div className="px-3 pb-3">
          {/* Image and Title */}
          <div className="flex gap-3 mb-3">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 relative bg-white rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium text-sm line-clamp-2 mb-1">
                {title}
              </h3>
              <span className="text-gray-400 text-xs">
                Disponible chez <span className="text-white">{store}</span>
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-400 font-bold text-lg">
              {isFree ? "Gratuit" : price}
            </span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {originalPrice}
              </span>
            )}
            {discount && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                {discount}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <CiHeart className="w-4 h-4" />
                <span className="text-sm">{comments}</span>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <CiBookmark className="w-4 h-4" />
              </button>
            </div>
            <Link
              href={href}
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded transition-colors"
            >
              Voir le deal
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block p-4">
        <div className="flex gap-4">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 relative bg-white rounded-lg overflow-hidden">
              <Image src={image} alt={title} fill className="object-contain" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header with temperature and time */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div
                    className={`flex items-center gap-1 ${getTemperatureBgColor(
                      temperature
                    )} rounded-full px-2 py-1`}
                  >
                    <span className="text-white text-sm font-medium">
                      {temperature}°
                    </span>
                  </div>
                </div>
                <CiDroplet className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-xs text-gray-400">{postedTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-white font-medium text-base mb-2 line-clamp-2">
              {title}
            </h3>

            {/* Price section */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-red-400 font-bold text-lg">
                {isFree ? "Gratuit" : price}
              </span>
              {originalPrice && (
                <span className="text-gray-400 line-through text-sm">
                  {originalPrice}
                </span>
              )}
              {discount && (
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                  {discount}
                </span>
              )}
              {isFree && (
                <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                  Gratuit
                </span>
              )}
              <span className="text-gray-400 text-sm">
                Disponible chez <span className="text-white">{store}</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm line-clamp-2 mb-3">
              {description}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                  <CiHeart className="w-4 h-4" />
                  <span className="text-sm">{comments}</span>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <CiShare2 className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <CiBookmark className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {couponCode && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded">
                      {couponCode}
                    </span>
                    <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors">
                      Copier & utiliser le code
                    </button>
                  </div>
                )}
                <Link
                  href={href}
                  className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded transition-colors"
                >
                  Voir le deal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
