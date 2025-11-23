import { FaChild, FaPaintBrush, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import type { CarouselItem } from "@/utils/carousel";
import Carousel from "@/utils/carousel"


const galleryItems: CarouselItem[] = [
    {
      title: "Arenero de Juegos",
      id: 1,
      icon: <FaChild className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/arenero.JPG',
    },
    {
      title: "Aulas Educativas",
      id: 2,
      icon: <FaBookOpen className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/salon-de-juegos.JPG',
    },
    {
      title: "Nuestros Docentes",
      id: 4,
      icon: <FaChalkboardTeacher className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/docente2.JPG',
    },
    {
      title: "Promovemos buenos valores",
      id: 3,
      icon: <FaPaintBrush className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/lavamanos.JPG',
    },
  ];

export default function Galeria() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
            Galería
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="bg-gray-50 rounded-2xl p-2 sm:p-4 md:p-8 shadow-lg border border-gray-100 w-full max-w-5xl">
            <Carousel 
              items={galleryItems}
              baseWidth={1000}
              baseHeight={600}
              autoplay={true}
              autoplayDelay={5000}
              pauseOnHover={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}