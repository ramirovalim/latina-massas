import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "pao-italiano",
    name: "Pão Italiano",
    category: "paes",
    description: "Pão Australiano feito com farinha de trigo, água, sal e fermento natural.",
    price: 25.0,
    imageUrl: "https://picsum.photos/640/480",
    ingredients: ["Farinha de trigo", "Água", "Sal", "Fermento natural"],
    allergens: ["Glúten"],
    isAvailable: true,
    featured: true,
    weight: "500g",
    preparationTime: "2 dias",
  },
];
