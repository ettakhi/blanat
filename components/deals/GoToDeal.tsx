import React from "react";
import { Button } from "@/components/ui/button";
import { HiExternalLink } from "react-icons/hi";

type GoToDealProps = { codePromo?: string };

const GoToDeal = ({ codePromo }: GoToDealProps) => {
  if (!codePromo) {
    return (
      <Button
        className="grow md:grow-0 cursor-pointer rounded-2xl text-white bg-cyan-600 hover:bg-cyan-700 whitespace-nowrap"
        size="sm"
      >
        Voir le deal <HiExternalLink className="inline-block ml-1" />
      </Button>
    );
  }

  return (
    <div className="grow md:grow-0 group flex items-center rounded-full border border-dashed border-cyan-600 hover:border-cyan-800 overflow-hidden">
      {/* takes remaining space, shows ellipsis */}
      <span className="flex-1 min-w-0 px-3 group-hover:text-cyan-700 text-cyan-600 truncate text-center">
        {codePromo}
      </span>

      {/* fixed pill, always fully visible */}
      <button
        type="button"
        className="cursor-pointer shrink-0 flex items-center gap-1 rounded-full m-0.5 bg-cyan-600 group-hover:bg-cyan-700 px-3 py-0.5 text-white whitespace-nowrap"
      >
        <span className="hidden md:inline-block">
          Copier & utiliser le code
        </span>
        <span className="md:hidden">Utiliser</span>
        <HiExternalLink className="inline-block ml-1" />
      </button>
    </div>
  );
};

export default GoToDeal;
