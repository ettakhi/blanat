import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type AvatarImgProps = {
  img?: string;
  fallback?: string;
  username?: string;
};

const AvatarImg = ({
  img = "",
  fallback = "",
  username = "user",
}: AvatarImgProps) => {
  return (
    <Avatar className="w-6 h-6">
      <AvatarImage src={img || ""} alt={`@${username}`} />
      <AvatarFallback className="">
        <small>{fallback}</small>
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarImg;
