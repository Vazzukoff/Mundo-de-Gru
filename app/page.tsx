import QuienesSomos from "@/components/root/quienes-somos";
import Instalaciones from "@/components/root/instalaciones";
import Unicos from "@/components/root/unicos";
import Directora from "@/components/root/directora";
import Galeria from "@/components/root/galeria";
import Hero from "@/components/root/hero";


export default function Home() {
  
  return (
    <section className="bg-gray-50 min-h-screen">

      <Hero />

      <QuienesSomos />
      
      <Instalaciones />

      <Unicos />

      <Directora />

      <Galeria  />

    </section>
  );
}