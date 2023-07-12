import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="flex  flex-col w-full mx-auto items-center  pt-6">
      <Hero />
      {/* Feature section */}
      <Features />
      {/* Testimonials */}
      <Testimonials />
      {/* Cta */}
      <Cta />
    </main>
  );
}
