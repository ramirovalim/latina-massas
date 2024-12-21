import imgSrc from "@/public/bread.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 flex flex-col items p-8">
        <Image
          src={imgSrc}
          alt="Pão artesanal"
          width={300}
          height={200}
          className="mix-blend-multiply"
        />
        <h2 className="text-2xl font-semibold mt-4">Nossa História</h2>
        <p className="text mt-2">Descubra nossos deliciosos pães artesanais.</p>
      </main>
    </div>
  );
}
