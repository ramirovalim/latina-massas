"use client";

import { MenuItem } from "./MenuItem";
import { itemsJson } from "@/utils/items";
import { ProductImageKeys } from "@/public/photos/products/index";

export const Menu = () => {
  const items = itemsJson();

  const today = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  }).format(new Date());

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      alert("element found");
    }
  };

  const renderMenuDate = () => {
    return (
      <div className="relative -top-7 w-5/6 px-8 py-3 bg-amber-950 rounded-tr-xl rounded-bl-xl">
        <p className="text-2xl text-center text-amber-50">
          FORNADA {`${today}`}
        </p>
      </div>
    );
  };

  return (
    <div className="mt-6 w-[calc(100vw-2rem)] border-2 border-amber-950/50 rounded-md">
      <div className="flex justify-center items-center -mb-4">
        {renderMenuDate()}
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer mb-6 mx-4"
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <MenuItem
              title={item.name}
              description={item.description}
              price={item.price}
              imgSrc={item.imgSrc as ProductImageKeys}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
