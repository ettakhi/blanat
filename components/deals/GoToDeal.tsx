import React from "react";
import { Button } from "@/components/ui/button";
import { HiExternalLink } from "react-icons/hi";

type GoToDealProps = {
  codePromo?: string;
};

const GoToDeal = ({ codePromo }: GoToDealProps) => {
  return (
    <>
      {codePromo ? (
        <div className="grow md:grow-0 cursor-pointer rounded-full border border-dashed border-cyan-600 flex items-center">
          <span className="text-cyan-600 text-center md:mx-4 grow truncate">
            {codePromo}
          </span>
          <span className="rounded-full bg-cyan-600 px-3 py-1 text-white">
            <span className="hidden md:inline-block">
              Copier & utiliser le code
            </span>
            <span className="md:hidden">Utiliser</span>
            <HiExternalLink className="inline-block ml-1" />
          </span>
        </div>
      ) : (
        <Button
          className="grow md:grow-0 cursor-pointer rounded-2xl text-white bg-cyan-600 hover:bg-cyan-700"
          size="sm"
        >
          Voir le deal
          <HiExternalLink className="inline-block ml-1" />
        </Button>
      )}
    </>
  );
};

export default GoToDeal;
