import Image from "next/image";
import { Button } from "../ui/button";
import {
  HiArrowUp,
  HiArrowDown,
  HiOutlineTruck,
  HiExternalLink,
} from "react-icons/hi";
import AvatarImg from "../AvatarImg";
import { IMG_HAKIM } from "@/lib/constants";
const DealCard = () => (
  <div className="bg-white grid grid-cols-3 md:grid-cols-4 h-60 md:h-64 border border-gray-200 rounded-lg overflow-hidden m-2">
    {/* side thumbnail */}
    <div className="relative col-span-1 h-full">
      <Image
        src="https://i.imgur.com/41Dtd1r.jpeg"
        alt="Deal"
        fill
        className="object-contain"
        sizes="(max-width: 640px) 20vw, 10rem" /* optional hint */
      />
    </div>

    {/* details */}
    <div className="flex flex-col items-center col-span-2 md:col-span-3 p-2">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center gap-1 rounded-full bg-gray-100 border border-gray-50">
          <HiArrowUp className="text-blue-500 h-6 w-6 hover:bg-blue-200 p-1 rounded-full cursor-pointer border" />
          <small className="text-orange-500">344°</small>
          <HiArrowDown className="text-red-500 h-6 w-6 hover:bg-red-200 p-1 rounded-full cursor-pointer border" />
        </div>
        <div className="text-sm text-gray-800">
          <small className="bg-gray-100 border rounded-lg px-2 py-1.5">
            Posted 1 day ago
          </small>
        </div>
      </div>
      <div className="w-full">
        <div className="font-semibold text-gray-900 line-clamp-2 mt-2">
          Multimètre & Caméra Thermique 2 en 1 Mustool MT13S fdsaf fdsafdf
          fdsafsdfdsafds fdsafd fdsafdfadgdfa dfafsdfsdf fdsfad fdsafdfas
          fdsafdsfsadf fdsafdfad
        </div>
        <div className="flex gap-2">
          <span className="text-red-600 font-bold text-2xl">100,99€</span>
          <span className="text-gray-400 text-sm flex items-center gap-1">
            <HiOutlineTruck className="h-5 w-5" /> Gratuit
          </span>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className="text-sm text-gray-600 mt-1 gap-1 flex items-center">
            <span className="hidden md:inline-block italic">Available</span>
            <span className="italic">At</span>
            <span className="text-blue-600">Store Name</span>
          </div>
          <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
            <span className="italic">
              <span className="hidden md:inline-block">shared</span> by
            </span>
            <span className="flex items-center gap-1 border rounded-full pe-2 bg-gray-100 cursor-pointer hover:bg-gray-200">
              <AvatarImg img={IMG_HAKIM} username="ettakhi" fallback="EA" />
              <span>ettakhi</span>
            </span>
          </div>
        </div>
        <div className="line-clamp-1 md:line-clamp-2 text-sm text-gray-500 mt-2">
          À propos de cet article Hautes performances : Interface PCIe 4.0 Gen4
          avec NVMe 2.0, capable de gérer jusqu&apos;à 7400 Mo/s en lecture et
          6500 Mo/s en écriture, idéale pour les gamers et les créateurs de
          contenu. Meilleure efficacité : Le HMB (Host Memory Buffer) et la
          mémoire cache SLC garantissent un chargement de jeu plus rapide et un
          transfert de fichiers plus efficace. Technologie avancée : Equipé du
          dernier contrôleur PCIe et de la mémoire Flash NAND, pour des
          performances élevées avec une consommation d&apos;énergie réduite et
          une dissipation thermique minimale. Espace de stockage généreux :
          Disponible avec des capacités de stockage plus importantes et une
          qualité NAND supérieure pour une plus grande durabilité et pour
          répondre à de multiples besoins de stockage. Contrôle de la
          température : Intègre une limitation thermique et une gestion de
          l&apos;énergie pour réguler automatiquement la température et
          surmonter les pics de chaleur lors de charges de travail lourdes.
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

export default DealCard;
