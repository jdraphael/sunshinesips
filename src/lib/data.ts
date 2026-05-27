import {
  BookOpen,
  CakeSlice,
  CupSoda,
  Flame,
  Heart,
  Lightbulb,
  ShoppingBag,
  Shirt,
  Sparkles,
  Sticker,
  Sun,
} from "lucide-react";
import type { BlogPost, Product, Recipe } from "@/lib/types";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/recipes", label: "Recipes" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export const features = [
  {
    title: "Joy In Every Sip",
    description: "Easy recipes and bright ideas for slow mornings, sweet afternoons, and tiny celebrations.",
    icon: Sun,
  },
  {
    title: "Positivity & Kindness",
    description: "Gentle reminders, cozy rituals, and little sparks of happy for your everyday rhythm.",
    icon: Heart,
  },
  {
    title: "Shop Sweet Finds",
    description: "Cute, cozy products made to bring a smile before the first sip is even poured.",
    icon: ShoppingBag,
  },
];

export const favoriteProducts: Product[] = [
  {
    id: "honey-lemon-elixir",
    name: "Honey Lemon Sunshine Elixir",
    category: "Recipes",
    price: "Free recipe",
    description: "A golden citrus hug with honey, lemon, and a soft sparkle.",
    image: "/images/generated/honey-lemon-elixir.png",
    badge: "View Recipe",
  },
  {
    id: "choose-happy-mug",
    name: "Choose Happy Mug",
    category: "Mugs",
    price: "$24",
    description: "A creamy ceramic mug for happy morning rituals.",
    image: "/images/generated/choose-happy-mug.png",
    badge: "Shop Now",
  },
  {
    id: "sunshine-ideas-journal",
    name: "Sunshine Ideas Journal",
    category: "Stationery",
    price: "$18",
    description: "A pastel journal for recipes, gratitude notes, and bright ideas.",
    image: "/images/generated/sunshine-journal.png",
    badge: "Shop Now",
  },
  {
    id: "lemon-poppyseed-muffins",
    name: "Lemon Poppyseed Muffins",
    category: "Bakery",
    price: "Free recipe",
    description: "Tender lemon muffins with a cheerful bakery-style crumb.",
    image: "/images/generated/lemon-muffins.png",
    badge: "View Recipe",
  },
];

export const recipes: Recipe[] = [
  {
    id: "strawberry-sunshine-refresher",
    title: "Strawberry Sunshine Refresher",
    category: "Lemonade",
    difficulty: "Easy",
    prepTime: "10 min",
    description: "Strawberries, lemon, mint, and sparkling water for a pink patio sip.",
    image: "/images/generated/recipe-drinks-collage.png",
    imagePosition: "left top",
  },
  {
    id: "honey-citrus-glow",
    title: "Honey Citrus Glow",
    category: "Cozy",
    difficulty: "Easy",
    prepTime: "8 min",
    description: "Warm lemon, orange, honey, and ginger for slow golden evenings.",
    image: "/images/generated/recipe-drinks-collage.png",
    imagePosition: "right top",
  },
  {
    id: "lavender-lemon-dream",
    title: "Lavender Lemon Dream",
    category: "Lemonade",
    difficulty: "Medium",
    prepTime: "15 min",
    description: "A soft lavender lemonade with a floral finish and cloudy ice.",
    image: "/images/generated/recipe-drinks-collage.png",
    imagePosition: "left bottom",
  },
  {
    id: "blueberry-bliss-smoothie",
    title: "Blueberry Bliss Smoothie",
    category: "Smoothies",
    difficulty: "Easy",
    prepTime: "7 min",
    description: "Blueberries, banana, vanilla yogurt, and lemon zest blended creamy.",
    image: "/images/generated/recipe-drinks-collage.png",
    imagePosition: "right bottom",
  },
  {
    id: "peachy-keen-lemonade",
    title: "Peachy Keen Lemonade",
    category: "Seasonal",
    difficulty: "Easy",
    prepTime: "12 min",
    description: "Peach nectar, fresh lemon, and basil over crushed ice.",
    image: "/images/generated/honey-lemon-elixir.png",
  },
  {
    id: "sunny-muffin-break",
    title: "Sunny Muffin Break",
    category: "Bakery",
    difficulty: "Medium",
    prepTime: "30 min",
    description: "A citrus bakery pairing for brunch boards and cozy coffee tables.",
    image: "/images/generated/lemon-muffins.png",
  },
];

export const products: Product[] = [
  {
    id: "sunshine-mug",
    name: "Sunshine Mug",
    category: "Drinkware",
    price: "$24",
    description: "Cream ceramic mug with a soft sunrise motif.",
    image: "/images/generated/shop-products-collage.png",
    imagePosition: "left top",
    badge: "Bestseller",
  },
  {
    id: "cozy-hoodie",
    name: "Cozy Hoodie",
    category: "Apparel",
    price: "$58",
    description: "Buttery-soft hoodie for lemonade walks and slow Sundays.",
    image: "/images/generated/shop-products-collage.png",
    imagePosition: "center top",
  },
  {
    id: "rainbow-journal",
    name: "Rainbow Journal",
    category: "Stationery",
    price: "$18",
    description: "Pastel pages for tiny wins, recipes, and happy lists.",
    image: "/images/generated/shop-products-collage.png",
    imagePosition: "right top",
  },
  {
    id: "lemon-sticker-pack",
    name: "Lemon Sticker Pack",
    category: "Stationery",
    price: "$9",
    description: "Little sunshine stickers for planners, laptops, and notes.",
    image: "/images/generated/shop-products-collage.png",
    imagePosition: "left bottom",
  },
  {
    id: "sunshine-candle",
    name: "Sunshine Candle",
    category: "Home",
    price: "$32",
    description: "Lemon blossom, vanilla sugar, and warm windowsill notes.",
    image: "/images/generated/shop-products-collage.png",
    imagePosition: "center bottom",
    badge: "New",
  },
  {
    id: "recipe-ebook",
    name: "Recipe eBook",
    category: "Digital",
    price: "$14",
    description: "A sweet starter guide to sunny drinks and cozy pairings.",
    image: "/images/generated/shop-products-collage.png",
    imagePosition: "right bottom",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "morning-sunshine-ritual",
    title: "A Soft Morning Sunshine Ritual",
    category: "Lifestyle",
    excerpt: "A five-minute ritual for making the first sip of the day feel intentional.",
    image: "/images/generated/blog-contact-flatlay.png",
    readTime: "4 min read",
  },
  {
    id: "cozy-cafe-corner",
    title: "How To Create A Cozy Cafe Corner",
    category: "Home",
    excerpt: "Pastel mugs, gentle light, and tiny details that make a counter feel special.",
    image: "/images/generated/about-lifestyle.png",
    readTime: "6 min read",
  },
  {
    id: "lemonade-board",
    title: "Build A Lemonade Brunch Board",
    category: "Hosting",
    excerpt: "Pair bright drinks with muffins, fruit, honey, and flowers for an easy table.",
    image: "/images/generated/lemon-muffins.png",
    readTime: "5 min read",
  },
];

export const faqs = [
  {
    question: "Can I order Sunshine Sips products today?",
    answer: "The shop is a mock storefront for v1. Products are ready for future Stripe or Shopify checkout.",
  },
  {
    question: "Do you publish new recipes?",
    answer: "Yes. The current recipes are mock examples, designed so a CMS or Supabase backend can power them later.",
  },
  {
    question: "Can brands collaborate with Sunshine Sips?",
    answer: "Yes. Use the contact form for partnerships, product styling, and cozy content collaborations.",
  },
];

export const categoryIcons = {
  Drinkware: CupSoda,
  Apparel: Shirt,
  Stationery: Lightbulb,
  Home: Flame,
  Digital: BookOpen,
  Recipes: Sparkles,
  Bakery: CakeSlice,
  Stickers: Sticker,
};
