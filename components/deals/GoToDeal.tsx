// GoToDeal.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { HiExternalLink } from "react-icons/hi";
import { cn } from "@/lib/utils";

type GoToDealProps = { codePromo: string | null; dealLink: string | null };

export default function GoToDeal({ codePromo, dealLink }: GoToDealProps) {
  const handleClick = async (e: React.MouseEvent) => {
    // Only prevent default and handle click if we have a dealLink
    if (!dealLink) return;

    e.preventDefault(); // cancel the parent <Link> default nav
    e.stopPropagation(); // stop bubbling to the card

    // Copy promo code to clipboard if it exists
    if (codePromo) {
      try {
        await navigator.clipboard.writeText(codePromo);
      } catch (err) {
        console.error("Failed to copy promo code:", err);
      }
    }

    window.open(dealLink, "_blank", "noopener,noreferrer");
  };

  // Show promo code version if both codePromo and dealLink exist
  if (codePromo && dealLink) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="grow md:grow-0 group flex items-center rounded-full border border-dashed border-cyan-600 hover:border-cyan-800 overflow-hidden cursor-pointer w-full"
        aria-label="Copier & utiliser le code"
      >
        <span className="flex-1 min-w-0 px-3 group-hover:text-cyan-700 text-cyan-600 truncate text-center">
          {codePromo}
        </span>

        <div className="shrink-0 flex items-center gap-1 rounded-full m-0.5 bg-cyan-600 group-hover:bg-cyan-700 px-3 py-0.5 text-white whitespace-nowrap">
          <span className="hidden md:inline-block">
            Copier & utiliser le code
          </span>
          <span className="md:hidden">Utiliser</span>
          <HiExternalLink className="inline-block ml-1" />
        </div>
      </button>
    );
  }

  // Fallback button for when there's only dealLink or neither
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "grow md:grow-0 cursor-pointer rounded-2xl whitespace-nowrap px-4 py-1 text-sm font-medium transition-colors",
        {
          "bg-white text-cyan-600 hover:bg-cyan-500/10 border border-cyan-500/15":
            !dealLink,
          "text-white bg-cyan-600 hover:bg-cyan-700": dealLink,
        }
      )}
      aria-label={dealLink ? "Voir le deal" : "En savoir plus"}
    >
      {dealLink ? "Voir le deal" : "En savoir plus"}
      {dealLink && <HiExternalLink className="inline-block ml-1" />}
    </button>
  );
}
