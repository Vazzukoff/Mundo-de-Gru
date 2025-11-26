'use client';

import { FaChild, FaPaintBrush, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import type { CarouselItem } from "@/utils/carousel";
import Carousel from "@/utils/carousel"
import { useEffect, useRef, useState } from 'react';

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
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const descriptionRef = useRef(null);
  const carouselRef = useRef(null);

  const [isVisible, setIsVisible] = useState({
    header: false,
    divider: false,
    description: false,
    carousel: false
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          
          if (target === headerRef.current) {
            setTimeout(() => {
              setIsVisible(prev => ({ ...prev, header: true }));
            }, 100);
          }
          
          if (target === dividerRef.current) {
            setTimeout(() => {
              setIsVisible(prev => ({ ...prev, divider: true }));
            }, 300);
          }
          
          if (target === descriptionRef.current) {
            setTimeout(() => {
              setIsVisible(prev => ({ ...prev, description: true }));
            }, 500);
          }
          
          if (target === carouselRef.current) {
            setTimeout(() => {
              setIsVisible(prev => ({ ...prev, carousel: true }));
            }, 700);
          }
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-16 px-4"
      aria-labelledby="galeria-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 
            ref={headerRef}
            id="galeria-heading"
            className={`font-bold text-4xl sm:text-5xl text-gray-800 mb-6 transition-all duration-700 ${
              isVisible.header
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Galería del Nido Infantil
          </h2>
          <div 
            ref={dividerRef}
            className={`w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8 transition-all duration-700 ${
              isVisible.divider
                ? 'opacity-100 scale-x-100'
                : 'opacity-0 scale-x-0'
            }`} 
            role="presentation"
          ></div>
          <p 
            ref={descriptionRef}
            className={`text-lg text-gray-600 font-medium max-w-2xl mx-auto transition-all duration-700 ${
              isVisible.description
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Conoce nuestras instalaciones de guardería, espacios de estimulación temprana y el ambiente de aprendizaje que ofrecemos en nuestro nido
          </p>
        </header>

        <div className="flex justify-center items-center">
          <div 
            ref={carouselRef}
            className={`bg-gray-50 rounded-2xl p-2 sm:p-4 md:p-8 shadow-lg border border-gray-100 w-full max-w-5xl transition-all duration-700 ${
              isVisible.carousel
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
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