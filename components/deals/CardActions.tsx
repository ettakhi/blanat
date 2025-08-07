import React from "react";
import {
  HiOutlineChat,
  HiOutlineShare,
  HiOutlineBookmark,
} from "react-icons/hi";

type CardActionsProps = {
  commentsCount: number;
};

const CardActions = ({ commentsCount }: CardActionsProps) => {
  return (
    <div
      id="actions"
      className="flex items-center justify-between gap-1.5 md:gap-3 text-gray-500"
    >
      <div className="flex items-center hover:text-blue-400 hover:scale-105">
        <HiOutlineChat className="h-5 w-5 md:h-6 md:w-6" />
        <span className="text-sm">{commentsCount}</span>
      </div>
      <div className="flex items-center hover:text-blue-400 hover:scale-105">
        <HiOutlineShare className="h-5 w-5 md:h-6 md:w-6" />
      </div>
      <div className="flex items-center hover:text-blue-400 hover:scale-105">
        <HiOutlineBookmark className="h-5 w-5 md:h-6 md:w-6" />
      </div>
    </div>
  );
};

export default CardActions;
