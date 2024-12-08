import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full p-4 bg-black text-white flex justify-center">
      <Link href="https://wa.me/123456789" className="px-2">
        WhatsApp
      </Link>
      <Link href="https://instagram.com/latinamassas" className="px-2">
        Instagram
      </Link>
    </footer>
  );
}
