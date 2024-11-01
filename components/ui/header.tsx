import { NavLinks } from "./nav-link";

export function Header() {
  return (
    <header className="w-full p-4 bg-black text-white flex justify-between items-center">
      <h1 className="text-xl font-bold border px-4">LOGO</h1>
      <NavLinks />
    </header>
  );
}
