export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  shortDescription: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: string;
};

export type CartItemType = {
  id: string;
  productId: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  image: string;
};
