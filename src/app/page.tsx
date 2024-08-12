import AppBar from "@/components/AppBar";
import { InfiniteMovingCardsDemo } from "@/components/Cards";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <AppBar />
      <HeroSection />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
