import { Menu } from "@/components/ui/Menu";
// import imgSrc from "@/public/bread.jpg";
// import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 flex flex-col w-full items-center p-8">
        {/* add only components, to facility testing and quick changes */}
        <Menu />
      </main>
    </div>
  );
}
