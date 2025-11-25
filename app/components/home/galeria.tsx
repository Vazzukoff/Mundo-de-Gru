import { FaChild, FaPaintBrush, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import type { CarouselItem } from "@/utils/carousel";
import Carousel from "@/utils/carousel"

const galleryItems: CarouselItem[] = [
  {
    title: "Arenero de juegos para estimulación sensorial",
    id: 1,
    icon: <FaChild className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/arenero.JPG',
  },
  {
    title: "Aulas educativas equipadas para estimulación temprana",
    id: 2,
    icon: <FaBookOpen className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/salon-de-juegos.JPG',
  },
  {
    title: "Docentes especializados",
    id: 4,
    icon: <FaChalkboardTeacher className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/docente2.JPG',
  },
  {
    title: "Promovemos autonomía e independencia",
    id: 3,
    icon: <FaPaintBrush className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/lavamanos.JPG',
  },
];

export default function Galeria() {
  return (
    <section 
      className="bg-white py-16 px-4"
      aria-labelledby="galeria-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 
            id="galeria-heading"
            className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6"
          >
            Galería del Nido Infantil
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8" role="presentation"></div>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Conoce nuestras instalaciones de guardería, espacios de estimulación temprana y el ambiente de aprendizaje que ofrecemos en nuestro nido
          </p>
        </header>

        <div className="flex justify-center items-center">
          <div 
            className="bg-gray-50 rounded-2xl p-2 sm:p-4 md:p-8 shadow-lg border border-gray-100 w-full max-w-5xl"
            role="region"
            aria-label="Carrusel de imágenes del nido infantil"
          >
            <Carousel 
              items={galleryItems}
              baseWidth={1000}
              baseHeight={400}
              autoplay={true}
              autoplayDelay={5000}
              pauseOnHover={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}