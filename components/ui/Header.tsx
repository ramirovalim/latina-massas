import { NavLinks } from "./NavLink";

export function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <NavLinks />
    </header>
  );
}
