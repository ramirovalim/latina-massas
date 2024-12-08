import { MenuItem } from "./MenuItem";
import { itemsJson } from "@/utils/items";
import { ProductImageKeys } from "@/public/photos/products/index";

export const Menu = () => {
  const items = itemsJson();

  return (
    <div className="flex-1 flex flex-col items-center">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
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
