'use client';

import { useEffect, useRef, useState } from 'react';

export default function QuienesSomos() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const articleRef = useRef(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  const [isVisible, setIsVisible] = useState({
    header: false,
    divider: false,
    article: false,
    paragraphs: [false, false, false]
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
          
          if (target === articleRef.current) {
            setTimeout(() => {
              setIsVisible(prev => ({ ...prev, article: true }));
            }, 400);
          }
          
          paragraphsRef.current.forEach((p, index) => {
            if (target === p) {
              setTimeout(() => {
                setIsVisible(prev => ({
                  ...prev,
                  paragraphs: prev.paragraphs.map((val, i) => i === index ? true : val)
                }));
              }, 700 + (index * 150));
            }
          });
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);
    if (articleRef.current) observer.observe(articleRef.current);
    paragraphsRef.current.forEach(p => p && observer.observe(p));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gray-50 py-16 px-4"
      aria-labelledby="quienes-somos-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            ref={headerRef}
            id="quienes-somos-heading"
            className={`font-bold text-4xl sm:text-5xl text-gray-800 mb-6 transition-all duration-700 ${
              isVisible.header 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
          >
            ¿Quiénes somos?
          </h2>
          <div 
            ref={dividerRef}
            className={`w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8 transition-all duration-700 ${
              isVisible.divider
                ? 'opacity-100 scale-x-100'
                : 'opacity-0 scale-x-0'
            }`}
            role="presentation"
          />
        </div>
        
        <article 
          ref={articleRef}
          className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible.article
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-6 text-center font-medium text-gray-700 leading-relaxed">
            <p 
              ref={el => { paragraphsRef.current[0] = el; }}
              className={`text-lg transition-all duration-700 ${
                isVisible.paragraphs[0]
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <strong className="text-cyan-600 font-bold">El mundo de Gru</strong> es un{' '}
              nido y centro de educación inicial conformado por profesionales apasionados y especializados en el{' '}
              desarrollo integral de niños y niñas de hasta 5 años.
            </p>
            
            <p 
              ref={el => { paragraphsRef.current[1] = el; }}
              className={`text-lg transition-all duration-700 ${
                isVisible.paragraphs[1]
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              Como centro especializado en estimulación temprana, nuestro propósito es brindar un{' '}
              <strong className="text-amber-400">espacio seguro, alegre y lleno de aprendizaje</strong>, 
              donde los valores y el juego se convierten en las principales herramientas para formar grandes personas.
            </p>
            
            <p 
              ref={el => { paragraphsRef.current[2] = el; }}
              className={`text-lg transition-all duration-700 ${
                isVisible.paragraphs[2]
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              Creemos en la importancia de{' '}
              <strong className="text-orange-400">construir una relación cercana no solo con los pequeños, sino también con sus familias</strong>, integrándolas activamente 
              en el proceso educativo de estimulación temprana para crear una verdadera comunidad comprometida con el bienestar y crecimiento de cada niño.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}