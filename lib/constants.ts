import { tDealCard } from "@/components/deals/DealCard";

export const IMG_HAKIM =
  "https://lh3.googleusercontent.com/a/ACg8ocIVFImGuxIc88qY0fm6BTibar2BAoMBIS_ze0cbteqGbAefAFjGdw=s96-c";

export const PS5_GAME_IMG = "https://i.imgur.com/41Dtd1r.jpeg";

// Dates
export const ONE_MONTH_AGO = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
export const ONE_WEEK_AGO = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
export const ONE_DAY_AGO = new Date(Date.now() - 24 * 60 * 60 * 1000);

// Texts
export const DEAL_DESCRIPTION = `À propos de cet article Hautes performances : Interface PCIe 4.0 Gen4
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
          surmonter les pics de chaleur lors de charges de travail lourdes.`;

export const DEAL_TITLE_LONG = `Multimètre & Caméra Thermique 2 en 1 Mustool MT13S fdsaf fdsafdf
          fdsafsdfdsafds fdsafd fdsafdfadgdfa dfafsdfsdf fdsfad fdsafdfas
          fdsafdsfsadf fdsafdfad`;

export const DEAL_TITLE_SHORT = `Multimètre & Caméra Thermique 2 en 1 Mustool MT13S`;

export const DEALS_MOCK: tDealCard[] = [
  {
    title: "Super Deal 1",
    price: 49.99,
    votes: 20,
    description:
      "Get the best deal on this amazing product! Limited time offer.",
    thumbnail: "https://picsum.photos/200/300?random=1",
    storeName: "Marjane",
    postedDate: ONE_MONTH_AGO,
    sharedBy: {
      username: "ettakhi",
      img: IMG_HAKIM,
      id: "user-1",
    },
  },
  {
    title:
      "Amazing Offer 2 lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dsfafds fdsf fdsf fdsfad fdsfd fdsfdsljhlj",
    description: DEAL_DESCRIPTION,
    votes: 344,
    price: 23,
    oldPrice: 29,
    deliveryFee: 23,
    postedDate: ONE_WEEK_AGO,
    storeName: "Carrefour",
    thumbnail: "https://picsum.photos/200/300?random=2",
    sharedBy: {
      username: "hakim",
      img: IMG_HAKIM,
      id: "user-2",
    },
  },
  {
    title: "Exclusive Deal 3",
    votes: -100,
    description:
      "Get the best deal on this amazing product! Limited time offer.",
    price: 19,
    storeName: "Aswak Assalam",
    postedDate: ONE_MONTH_AGO,
    expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 7 days
    thumbnail: "https://picsum.photos/200/300?random=3",
    sharedBy: {
      username: "mariame",
      img: IMG_HAKIM,
      id: "user-3",
    },
  },
  {
    title: "Limited Time Offer 4",
    description:
      "Get the best deal on this amazing product! Limited time offer.",
    price: 39.99,
    votes: 88,
    oldPrice: 45,
    deliveryFee: 5,
    postedDate: ONE_DAY_AGO,
    expiryDate: ONE_WEEK_AGO, // Expires one week ago
    storeName: "Electroplanet",
    thumbnail: "https://picsum.photos/200/300?random=4",
    sharedBy: {
      username: "ettakhi",
      img: IMG_HAKIM,
      id: "user-4",
    },
  },
  {
    title: "Best Price 5",
    description: DEAL_DESCRIPTION,
    votes: 150,
    price: 30,
    storeName: "Bim",
    postedDate: ONE_MONTH_AGO,
    thumbnail: "https://picsum.photos/200/300?random=5",
    sharedBy: {
      username: "jack",
      img: IMG_HAKIM,
      id: "user-5",
    },
  },
];
