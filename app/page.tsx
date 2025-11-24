import QuienesSomos from "@/components/home/quienes-somos";
import Instalaciones from "@/components/home/instalaciones";
import Unicos from "@/components/home/unicos";
import Directora from "@/components/home/directora";
import Galeria from "@/components/home/galeria";
import Hero from "@/components/home/hero";


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