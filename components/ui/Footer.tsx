import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full p-6 bg-amber-950 text-amber-50 flex flex-col gap-2 justify-center items-center">
      <p>Ficou com alguma dúvida? Entre em contato:</p>
      <div className="flex w-full gap-2 justify-evenly">
        <Link
          href="https://wa.me/+5535998553155"
          className="px-2 font-semibold underline"
        >
          WhatsApp
        </Link>
        <Link
          href="https://instagram.com/latinamassas"
          className="px-2 font-semibold underline"
        >
          Instagram
        </Link>
      </div>
    </footer>
  );
}
