import imgSrc from "@/public/bread.jpg";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <main className="flex-1 flex flex-col items-center p-8">
        <Image src={imgSrc} alt="Pão artesanal" width={300} height={200} />
        <h2 className="text-2xl text-zinc-800 font-semibold mt-4">Latina Massas</h2>
        <p className="text-center text-zinc-800 mt-2">Descubra nossos deliciosos pães artesanais.</p>
      </main>
    </div>
  );
}
