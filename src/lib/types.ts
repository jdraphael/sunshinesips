export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  imagePosition?: string;
  badge?: string;
};

export type Recipe = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  prepTime: string;
  description: string;
  image: string;
  imagePosition?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
};
