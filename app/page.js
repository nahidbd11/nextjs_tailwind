import Cta from "./components/Cta";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto items-center  sm:p-24 px-6 py-6">
      <Header />
      {/* Hero section */}
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
