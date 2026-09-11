import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import FeaturedSpaces from "@/components/sections/FeaturedSpaces";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <FeaturedSpaces />
    </div>
  );
}
