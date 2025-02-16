import Hero from "./sections/Hero";
import Material from "./sections/Material";
import Charger from "./sections/Charger";
import Navbar from "@/components/Nav";
import Color from "./sections/Color";
import Contacts from "./sections/Contacts";

export default function Home() {
  return (
    <main className="bg-primary text-accent w-full h-full">
      <Navbar />
      <Hero />
      <Material />
      <Charger />
      <Color />
      <Contacts />
    </main>
  );
}
