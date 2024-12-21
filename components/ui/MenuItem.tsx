import {
  ProductImageKeys,
  productImages,
} from "@/public/photos/products/index";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./dialog";
import { Button } from "./button";
import Image from "next/image";

export type MenuItemProps = {
  title: string;
  description: string;
  price: number;
  imgSrc: ProductImageKeys;
};

export const MenuItem = ({
  title,
  description,
  price,
  imgSrc,
}: MenuItemProps) => {
  if (!title || !description || !price || !imgSrc) {
    return (
      <div className="flex flex-col items-start p-8 text-amber-950">
        <span className="animate-pulse">Pães no forno...</span>
      </div>
    );
  }
  const image = productImages[imgSrc];

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col text-left p-4 gap-1 shadow-md text-amber-950">
          <div className="flex flex-row justify-between gap-2 text-xl font-bold tracking-tight leading-4">
            <p className="w-3/5">{title}</p>

            <p className=" tracking-tighter">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </p>
          </div>

          <section className="line-clamp-1">{description}</section>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[calc(100vw-2rem)] overflow-scroll">
        <DialogHeader>
          <DialogTitle>
            <p className="text-2xl text-left font-bold text-amber-950 leading-7">
              {title}
            </p>
          </DialogTitle>
          <DialogDescription>
            <section className="text-left text-lg text-amber-950 leading-6">
              {description}
            </section>
            <p className="text-left text-xl font-bold text-amber-950 leading-6">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-1">
          <div>
            <Image src={image} alt={title} width={300} height={200} />
          </div>
        </div>
        <DialogFooter className="flex flex-col items-center justify-center gap-4">
          <Button
            className="w-3/4"
            type="button"
            variant="cta"
            size={"lg"}
            onClick={() =>
              (window.location.href = "https://wa.me/+5535998553155")
            }
          >
            Pedir agora
          </Button>
          <DialogClose asChild>
            <Button
              className="w-3/4"
              type="button"
              variant="outline"
              size={"lg"}
            >
              Voltar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
