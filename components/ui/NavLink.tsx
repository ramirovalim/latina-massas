"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-evenly items-center w-full">
      <Link
        className={`link ${
          pathname === "/" ? "text-amber-950 font-bold" : ""
        } text-base sm:text-lg`}
        href="/"
      >
        CARDÁPIO
      </Link>
      {/* add a simple dot in the middle of the two links, but it has to be centered hor and vertically */}
      <span className="text-amber-950 font-bold text-lg">•</span>

      <Link
        className={`link ${
          pathname === "/about" ? "text-amber-950 font-bold" : ""
        } text-base sm:text-lg`}
        href="/about"
      >
        A LATINA
      </Link>
    </nav>
  );
}
