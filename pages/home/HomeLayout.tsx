import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export default function HomeLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
}
