'use client';

import Image from "next/image"
import { useEffect, useRef, useState } from 'react';

export default function Instalaciones() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const descriptionRef = useRef(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  const [isVisible, setIsVisible] = useState({
    header: false,
    divider: false,
    description: false,
    items: [false, false, false, false]
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
            }, 200);
          }
          
          if (target === descriptionRef.current) {
            setTimeout(() => {
              setIsVisible(prev => ({ ...prev, description: true }));
            }, 300);
          }
          
          itemsRef.current.forEach((item, index) => {
            if (target === item) {
              setTimeout(() => {
                setIsVisible(prev => ({
                  ...prev,
                  items: prev.items.map((val, i) => i === index ? true : val)
                }));
              }, 400 + (index * 150));
            }
          });
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    itemsRef.current.forEach(item => item && observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-16 px-4"
      aria-labelledby="instalaciones-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 
            ref={headerRef}
            id="instalaciones-heading"
            className={`font-bold text-4xl sm:text-5xl text-gray-800 mb-6 transition-all duration-700 ${
              isVisible.header
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Nuestras Instalaciones
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
            Espacios de guardería diseñados especialmente para la estimulación temprana y el desarrollo integral de tu pequeño
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Aulas Educativas */}
          <article 
            ref={el => { itemsRef.current[0] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.items[0]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent z-10"></div>
                <Image
                  src="/images/instalaciones/aula.JPG"
                  alt="Aulas educativas del nido infantil equipadas para estimulación temprana con áreas de aprendizaje"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={600}
                  loading="eager"
                />
                <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Aulas Educativas</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-cyan-500 pb-2 inline-block">
                  Aulas Educativas para Estimulación Temprana
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Nuestras aulas de nido infantil son amplias, luminosas y organizadas por contextos de aprendizaje. Cada espacio 
                  está cuidadosamente preparado para la estimulación temprana, invitando a la exploración, el juego y el descubrimiento.
                </p>
              </div>
            </div>
          </article>

          {/* Patio */}
          <article 
            ref={el => { itemsRef.current[1] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.items[1]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent z-10"></div>
                <Image
                  src="/images/instalaciones/patio.jpg"
                  alt="Patio seguro del nido infantil para juego libre y desarrollo motor"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-orange-400 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Patio</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-orange-400 pb-2 inline-block">
                  Patio de Juegos y Movimiento Libre
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Amplio espacio seguro de guardería diseñado para que los niños exploren el movimiento libre mientras desarrollan sus habilidades motrices 
                  y sociales a través de actividades de estimulación temprana al aire libre.
                </p>
              </div>
            </div>
          </article>

          {/* Comedor */}
          <article 
            ref={el => { itemsRef.current[2] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.items[2]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent z-10"></div>
                <Image
                  src="/images/instalaciones/comedor.JPG"
                  alt="Comedor del nido infantil con alimentación nutritiva y ambiente acogedor"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-orange-400 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Comedor</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-orange-400 pb-2 inline-block">
                  Comedor Nutritivo y Acogedor
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Nuestro comedor de guardería es un espacio acogedor y cuidadosamente diseñado donde los niños disfrutan alimentos 
                  nutritivos a la vez que experimentan autonomía y convivencia.
                </p>
              </div>
            </div>
          </article>

          {/* Gimnasio */}
          <article 
            ref={el => { itemsRef.current[3] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.items[3]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent z-10"></div>
                <Image
                  src="/images/instalaciones/gimnasio.JPG"
                  alt="Gimnasio del nido con equipamiento para desarrollo motor y estimulación temprana"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-amber-400 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Gimnasio</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-amber-400 pb-2 inline-block">
                  Gimnasio de Estimulación Motriz
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Espacio seguro y amplio de estimulación temprana equipado con colchonetas, rampas, túneles, bloques y materiales suaves que invitan a 
                  trepar, saltar y explorar sus capacidades motoras.
                </p>
              </div>
            </div>
          </article> 
        </div>
      </div>
    </section>
  )
}