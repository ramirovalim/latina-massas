import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

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
