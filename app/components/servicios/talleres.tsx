"use client";

import { FaUsers, FaHeart, FaAppleAlt, FaHome } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function Talleres() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const descriptionRef = useRef(null);
  const articlesRef = useRef<(HTMLElement | null)[]>([]);

  const [isVisible, setIsVisible] = useState({
    header: false,
    divider: false,
    description: false,
    articles: [false, false, false, false]
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
          
          articlesRef.current.forEach((article, index) => {
            if (target === article) {
              setTimeout(() => {
                setIsVisible(prev => ({
                  ...prev,
                  articles: prev.articles.map((val, i) => i === index ? true : val)
                }));
              }, 300 + (index * 150));
            }
          });
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    articlesRef.current.forEach(article => article && observer.observe(article));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-6" aria-labelledby="talleres-heading">
      <div>
        <header className="text-center mb-12">
          <h2 
            ref={headerRef}
            id="talleres-heading" 
            className={`font-bold text-4xl sm:text-5xl text-gray-800 mb-6 transition-all duration-700 ${
              isVisible.header
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Talleres complementarios
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
            Talleres especializados para toda la familia educativa
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Talleres para padres y abuelos */}
          <article 
            ref={el => { articlesRef.current[0] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.articles[0]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Talleres para padres y abuelos
                  </h3>
                  <div className="w-16 h-0.5 bg-orange-400 mt-1" role="presentation"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                Ofrecemos talleres de estimulación temprana diseñados para acompañar a los padres en el desarrollo de habilidades de crianza,
                técnicas de comunicación y estrategias de apoyo emocional.
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl transform rotate-1 scale-105" role="presentation"></div>
                <Image
                  src="/images/servicios/talleres/padres.jpg"
                  alt="Talleres para padres y abuelos del nido infantil sobre crianza y estimulación temprana"
                  className="relative w-full h-48 rounded-xl shadow-md object-cover transform -rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  width={800}
                  height={600}
                  loading="eager"
                />
              </div>
              <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg mt-6">
                <FaHeart className="text-orange-500 text-lg" aria-hidden="true" />
                <span className="text-orange-700 font-semibold text-sm">Fortalecemos vínculos familiares</span>
              </div>
            </div>
          </article>

          {/* Talleres para nanas */}
          <article 
            ref={el => { articlesRef.current[1] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.articles[1]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Talleres para nanas
                  </h3>
                  <div className="w-16 h-0.5 bg-cyan-500 mt-1" role="presentation"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                Ofrecemos formación especializada en estimulación temprana para nanas y cuidadores, enfocada en primeros auxilios,
                estímulo temprano y manejo de conductas en nuestra guardería.
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl transform -rotate-1 scale-105" role="presentation"></div>
                <Image
                  src="/images/servicios/talleres/nanas.jpg"
                  alt="Talleres de capacitación para nanas en estimulación temprana y primeros auxilios"
                  className="relative w-full h-48 rounded-xl shadow-md object-cover transform rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 bg-cyan-50 p-4 rounded-lg mt-6">
                <FaHeart className="text-cyan-500 text-lg" aria-hidden="true" />
                <span className="text-cyan-700 font-semibold text-sm">Capacitación profesional certificada</span>
              </div>
            </div>
          </article>

          {/* Taller de Nutrición */}
          <article 
            ref={el => { articlesRef.current[2] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.articles[2]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaAppleAlt className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Taller de Nutrición Infantil
                  </h3>
                  <div className="w-16 h-0.5 bg-amber-400 mt-1" role="presentation"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                Aprende sobre alimentación saludable infantil en nuestro nido, preparación de loncheras nutritivas, 
                manejo de alergias alimentarias y creación de hábitos alimentarios positivos.
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl transform rotate-1 scale-105" role="presentation"></div>
                <Image
                  src="/images/servicios/talleres/nutricion.jpg"
                  alt="Taller de nutrición infantil sobre alimentación saludable y loncheras nutritivas"
                  className="relative w-full h-48 rounded-xl shadow-md object-cover transform -rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg mt-6">
                <FaHeart className="text-amber-500 text-lg" aria-hidden="true" />
                <span className="text-amber-700 font-semibold text-sm">Alimentación consciente y saludable</span>
              </div>
            </div>
          </article>

          {/* Taller Proyecto de Familia */}
          <article 
            ref={el => { articlesRef.current[3] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.articles[3]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaHome className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Taller Proyecto de Familia
                  </h3>
                  <div className="w-16 h-0.5 bg-orange-400 mt-1" role="presentation"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                Construye un plan familiar sólido enfocado en valores, tradiciones, comunicación efectiva 
                y creación de un ambiente hogareño que favorezca el desarrollo integral de los niños.
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl transform -rotate-1 scale-105" role="presentation"></div>
                <Image
                  src="/images/servicios/talleres/taller de familia.jpg"
                  alt="Taller proyecto de familia para fortalecer vínculos y comunicación familiar"
                  className="relative w-full h-48 rounded-xl shadow-md object-cover transform rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg mt-6">
                <FaHeart className="text-orange-500 text-lg" aria-hidden="true" />
                <span className="text-orange-700 font-semibold text-sm">Unidos construimos hogares felices</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
