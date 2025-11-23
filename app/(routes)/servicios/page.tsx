import Talleres from "@/components/servicios/talleres";
import Title from "@/components/servicios/title";
import ServiciosExtra from "@/components/servicios/servicios";

export default function Servicios() {
  return (
    <section className="bg-gray-50 min-h-screen py-12 select-none">
      <Title />
      <ServiciosExtra />
      <Talleres />  
    </section>
  );
}