import { ProductImageKeys, productImages } from "@/public/photos/products/index";
import Image from "next/image";

export type MenuItemProps = {
  title: string;
  description: string;
  price: number;
  imgSrc: ProductImageKeys;
};

export const MenuItem = ({ title, description, price, imgSrc }: MenuItemProps) => {
  if (!title || !description || !price || !imgSrc) {
    return (
      <div className="flex flex-col items-start p-8 text-zinc-800">
        <span className="animate-pulse">Pães no forno...</span>
      </div>
    );
  }
  const image = productImages[imgSrc];

  return (
    <div className="flex flex-col items-start p-8 text-zinc-800">
      <div>
        <Image src={image} alt={title} width={300} height={200} />
      </div>
      <div>
        <h1 className="text-2xl">{title}</h1>
        <section>{description}</section>
        <h2>{price}</h2>
      </div>
    </div>
  );
};
