import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto items-center justify-between p-24">
      <Header />
    </main>
  );
}
