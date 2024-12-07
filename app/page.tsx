import Category from "@/components/Category";
import Hero from "@/components/Hero";
import BestSelling from "@/components/BestSelling";
import Enhance from "@/components/Enhance";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Category />
      <BestSelling />
      <Enhance />
    </main>
  );
}
