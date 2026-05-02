export interface Flavor {
  name: string;
  image: string;
  colorClass: string;
  dotColor?: string;
  barcode?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: "Potato Sticks" | "Popping Pearl";
  description: string;
  longDescription?: string;
  weight: string;
  mainImage: string;
  mainImageAlt: string;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  tags?: { text: string; colorClass: string }[];
  flavors?: Flavor[];
  relatedSlugs?: string[];
}

export const products: Product[] = [
  {
    slug: "original-crunch",
    name: "Original Crunch",
    category: "Potato Sticks",
    description: "The bag that started the revolution. Pure crispy gold.",
    longDescription:
      "Our flagship snack. Real potatoes, sliced into perfect sticks and lightly salted to perfection. It's the classic crunch that everyone knows and loves.",
    weight: "20g",

    mainImage: "/ProductCover/20gpotatoSticks.png",
    mainImageAlt: "20g Potato Sticks Original Flavor",
    badge: "FAN FAVOURITE",
    tags: [
      { text: "Variant", colorClass: "bg-surface-variant text-white" },
      {
        text: "20G",
        colorClass: "bg-white/10 text-[#ffdcc0] border border-white/20",
      },
    ],
    flavors: [
      {
        name: "Original Salted",
        image: "/Products/potatoSticks/20gSalted.png",
        colorClass: "bg-surface-container",
        barcode: "9555028710000",
      },
      {
        name: "Tomato",
        image: "/Products/potatoSticks/20gTomato.png",
        colorClass: "bg-secondary-container",
        barcode: "9555028710017",
      },
      {
        name: "Black Pepper",
        image: "/Products/potatoSticks/20gBlackPepper.png",
        colorClass: "bg-surface-container-lowest",
        barcode: "9555028710024",
      },
    ],
    relatedSlugs: ["party-bundle", "big-crunch-energy"],
  },
  {
    slug: "party-bundle",
    name: "Party Bundle",
    category: "Potato Sticks",
    description: "Five times the fun. Perfect for sharing (or not).",
    longDescription:
      "Why settle for one when you can have five? Our party bundle is designed for groups, families, or anyone who just really loves a good crunch.",
    weight: "20g x 5pcs",

    mainImage: "/ProductCover/20gx5potatoSticks.png",
    mainImageAlt: "5pcs Potato Sticks Pack",
    tags: [
      { text: "Variant", colorClass: "bg-surface-variant text-white" },
      {
        text: "20G x 5PCS",
        colorClass: "bg-white/10 text-[#ffdcc0] border border-white/20",
      },
    ],
    flavors: [
      {
        name: "Original Salted",
        image: "/Products/potatoSticks/20gx5Salteds.png",
        colorClass: "bg-surface-container",
        barcode: "9555028710048",
      },
      {
        name: "Tomato",
        image: "/Products/potatoSticks/20gx5Tomatos.png",
        colorClass: "bg-secondary-container",
        barcode: "9555028710055",
      },
      {
        name: "Black Pepper",
        image: "/Products/potatoSticks/20gx5BlackPeppers.png",
        colorClass: "bg-surface-container-lowest",
        barcode: "9555028710062",
      },
    ],
    relatedSlugs: ["original-crunch", "big-crunch-energy"],
  },
  {
    slug: "big-crunch-energy",
    name: "Big Crunch Energy",
    category: "Potato Sticks",
    description: "The hungrier choice. Loaded with zesty spice.",
    longDescription:
      "The ultimate crunch factor. Real potatoes, sliced into perfect sticks and blasted with our secret flavor dusting. High-energy snacking for high-energy humans.",
    weight: "43g",

    mainImage: "/ProductCover/43gpotatoSticks.png",
    mainImageAlt: "43g Potato Sticks Large Pack",
    tags: [
      {
        text: "Variant",
        colorClass: "bg-surface-variant text-white",
      },
      {
        text: "43G",
        colorClass: "bg-white/10 text-[#ffdcc0] border border-white/20",
      },
    ],
    flavors: [
      {
        name: "Tomato",
        image: "/Products/potatoSticks/43gTomato.png",
        colorClass: "bg-secondary-container",
        barcode: "9555028710277",
      },
      {
        name: "Original Salted",
        image: "/Products/potatoSticks/43gSalted.png",
        colorClass: "bg-surface-container-highest",
        barcode: "9555028710260",
      },
      {
        name: "Black Pepper",
        image: "/Products/potatoSticks/43gBlackPepper.png",
        colorClass: "bg-surface-container-lowest",
        barcode: "9555028710284",
      },
    ],
    relatedSlugs: ["original-crunch", "party-bundle"],
  },
  {
    slug: "pearl-bundle",
    name: "PEARL BUNDLE",
    category: "Popping Pearl",
    description: "Elegant floral notes mixed with earthy red bean.",
    longDescription:
      "A sophisticated blend of delicate rose and hearty red bean. These pearls offer a complex flavor profile that's both floral and comforting.",
    weight: "50g x 12pcs",

    mainImage: "/ProductCover/50x12poppingPearl.png",
    mainImageAlt: "PEARL BUNDLE Popping Pearls",
    tags: [
      {
        text: "Variant",
        colorClass: "bg-secondary-container text-white",
      },
      {
        text: "50G x 12PCS",
        colorClass: "bg-white/10 text-[#ffdcc0] border border-white/20",
      },
    ],
    flavors: [
      {
        name: "Water Chestnut",
        image: "/Products/poppingPearls/50gx12WaterChestnut.png",
        colorClass: "bg-surface-variant",
        barcode: "9555028711090",
      },
      {
        name: "Red Bean",
        image: "/Products/poppingPearls/50gx12RedBean.png",
        colorClass: "bg-primary-container",
        barcode: "9555028711106",
      },
      {
        name: "Barley",
        image: "/Products/poppingPearls/50gx12Barley.png",
        colorClass: "bg-secondary-container",
        barcode: "9555028711113",
      },
    ],
    relatedSlugs: ["pop-party", "the-event-pail"],
  },
  {
    slug: "the-event-pail",
    name: "The Event Pail",
    category: "Popping Pearl",
    description: "Bulk bliss for the biggest celebrations.",
    longDescription:
      "Hosting a party or event? Our event pail ensures you never run out of the popping fun. 500g of pure snack joy in a convenient, shareable format.",
    weight: "500g",

    mainImage: "/ProductCover/500gpoppingPearl.png",
    mainImageAlt: "Large Event Pail of Popping Pearls",
    badge: "GREAT FOR EVENTS",
    badgeColor: "bg-primary-container",
    badgeTextColor: "text-on-primary-fixed",
    tags: [
      {
        text: "Variant",
        colorClass: "bg-surface-variant text-white",
      },
      {
        text: "500G",
        colorClass: "bg-white/10 text-[#ffdcc0] border border-white/20",
      },
    ],
    flavors: [
      {
        name: "Water Chestnut",
        image: "/Products/poppingPearls/500gWaterChestnut.png",
        colorClass: "bg-primary-container",
        barcode: "9555028711014",
      },
      {
        name: "Red Bean",
        image: "/Products/poppingPearls/500gRedBean.png",
        colorClass: "bg-secondary-container",
        barcode: "9555028711021",
      },
      {
        name: "Barley",
        image: "/Products/poppingPearls/500gBarley.png",
        colorClass: "bg-surface-variant",
        barcode: "9555028711038",
      },
    ],
    relatedSlugs: ["pop-party", "pearl-bundle"],
  },
];
