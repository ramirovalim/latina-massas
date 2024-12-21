import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";

export default function HomeLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div>
      <Header />
      <Hero />
      <section>{children}</section>
      <Footer />
    </div>
  );
}
