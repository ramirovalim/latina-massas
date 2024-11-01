"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-evenly w-full">
      <Link className={`link ${pathname === "/" ? "active" : ""} text-base sm:text-lg`} href="/">
        Home
      </Link>

      <Link className={`link ${pathname === "/about" ? "active" : ""} text-base sm:text-lg`} href="/about">
        Sobre
      </Link>
    </nav>
  );
}
