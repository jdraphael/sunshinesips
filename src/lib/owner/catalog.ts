import type { OwnerProduct } from "@/lib/owner/types";

export const ownerProducts: OwnerProduct[] = [
  {
    id: "classic-lemonade",
    name: "Classic Lemonade",
    category: "drink",
    description: "Fresh citrus and sunshine.",
    priceCents: 200,
    inventory: 18,
    image: "/images/generated/hero-lemonade.png",
    imagePosition: "center",
  },
  {
    id: "pink-lemonade",
    name: "Pink Lemonade",
    category: "drink",
    description: "Sweet and refreshing.",
    priceCents: 200,
    inventory: 15,
    image: "/images/generated/honey-lemon-elixir.png",
    imagePosition: "center",
  },
  {
    id: "blue-raspberry-lemonade",
    name: "Blue Raspberry Lemonade",
    category: "drink",
    description: "Berry sweet and bold.",
    priceCents: 300,
    inventory: 10,
    image: "/images/generated/recipe-drinks-collage.png",
    imagePosition: "right bottom",
  },
  {
    id: "strawberry-lemonade",
    name: "Strawberry Lemonade",
    category: "drink",
    description: "Made with real strawberries.",
    priceCents: 300,
    inventory: 8,
    image: "/images/generated/recipe-drinks-collage.png",
    imagePosition: "left top",
  },
  {
    id: "chocolate-chip-cookie",
    name: "Chocolate Chip Cookie",
    category: "treat",
    description: "Fresh baked and cozy.",
    priceCents: 100,
    inventory: 12,
    image: "/images/generated/shop-products-collage.png",
    imagePosition: "left bottom",
  },
  {
    id: "lemon-poppy-seed-muffin",
    name: "Lemon Poppy Seed Muffin",
    category: "treat",
    description: "Soft, bright and delicious.",
    priceCents: 200,
    inventory: 6,
    image: "/images/generated/lemon-muffins.png",
    imagePosition: "center",
  },
  {
    id: "water",
    name: "Water",
    category: "water",
    description: "Cold and refreshing.",
    priceCents: 100,
    inventory: 20,
    image: "/images/generated/blog-contact-flatlay.png",
    imagePosition: "right bottom",
  },
];

export function formatMoney(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function getProduct(productId: string, products: OwnerProduct[] = ownerProducts) {
  return products.find((product) => product.id === productId);
}
