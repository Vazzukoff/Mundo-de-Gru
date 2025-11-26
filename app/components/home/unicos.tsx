'use client';

import { MdFamilyRestroom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

export default function Unicos() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const articlesRef = useRef<(HTMLElement | null)[]>([]);

  const [isVisible, setIsVisible] = useState({
    header: false,
    divider: false,
    articles: [false, false, false]
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
          
          articlesRef.current.forEach((article, index) => {
            if (target === article) {
              setTimeout(() => {
                setIsVisible(prev => ({
                  ...prev,
                  articles: prev.articles.map((val, i) => i === index ? true : val)
                }));
              }, 500 + (index * 150));
            }
          });
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);
    articlesRef.current.forEach(article => article && observer.observe(article));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gray-50 py-16 px-4"
      aria-labelledby="unicos-heading"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="text-center mb-12">
          <h2 
            ref={headerRef}
            id="unicos-heading"
            className={`font-bold text-4xl sm:text-5xl text-gray-800 mb-6 transition-all duration-700 ${
              isVisible.header
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
            }`}
          >
            ¿Qué nos diferencia?
          </h2>

          <div 
            ref={dividerRef}
            className={`w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full transition-all duration-700 ${
              isVisible.divider
                ? 'opacity-100 scale-x-100'
                : 'opacity-0 scale-x-0'
            }`} 
            role="presentation"
          ></div>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ARTICLE 1 */}
          <article 
            ref={el => { articlesRef.current[0] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.articles[0]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-cyan-500 hover:-translate-y-2">
              <div 
                className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <MdFamilyRestroom className="text-4xl text-white"/>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-500 pb-2 inline-block">
                Guardería con enfoque familiar
              </h3>

              <p className="text-gray-600 font-medium leading-7">
                En El mundo de Gru, nuestro nido aspira a forjar una estrecha relación no solo 
                con los pequeños sino también con las familias para contribuir con la formación integral, 
                creando una comunidad comprometida con el desarrollo de cada niño.
              </p>
            </div>
          </article>

          {/* ARTICLE 2 */}
          <article 
            ref={el => { articlesRef.current[1] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.articles[1]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-amber-400 hover:-translate-y-2">
              <div 
                className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <LuBrain className="text-4xl text-white"/>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2 inline-block">
                Estimulación temprana por proyectos
              </h3>

              <p className="text-gray-600 font-medium leading-7">
                En nuestro nido, aplicamos una metodología de estimulación temprana basada en 
                proyectos que potencia la curiosidad natural de los niños. A través del juego, 
                la exploración y la reflexión, desarrollan pensamiento crítico, creatividad y autonomía.
              </p>
            </div>
          </article>

          {/* ARTICLE 3 */}
          <article 
            ref={el => { articlesRef.current[2] = el; }}
            className={`group transition-all duration-700 ${
              isVisible.articles[2]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-orange-400 hover:-translate-y-2">
              <div 
                className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <FaHome className="text-4xl text-white"/>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-400 pb-2 inline-block">
                Equipado para estimulación
              </h3>

              <p className="text-gray-600 font-medium leading-7">
                Creemos que el ambiente es un educador más. Por eso, diseñamos espacios seguros, 
                acogedores y estimulantes donde cada rincón invita a descubrir, crear y compartir 
                en un entorno óptimo para el aprendizaje.
              </p>
            </div>
          </article>

        </div>
      </div>      
    </section>
  );
}