import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import FeaturedSpaces from "@/components/sections/FeaturedSpaces";
import LandlordCTA from "@/components/sections/LandlordCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <FeaturedSpaces />
      <LandlordCTA />
      <Footer />
    </div>
  );
}
