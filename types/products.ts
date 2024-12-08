export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  ingredients?: string[];
  allergens?: string[];
  isAvailable?: boolean;
  featured?: boolean;
  weight?: string; // "400g"
  preparationTime?: string; // "24h de fermentaçao"
};
