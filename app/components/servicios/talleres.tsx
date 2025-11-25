"use client";

import { motion } from "framer-motion";
import { FaUsers, FaHeart, FaAppleAlt, FaHome } from "react-icons/fa";
import Image from "next/image";

export default function Talleres() {
  return (
    <section className="w-full px-4 sm:px-6" aria-labelledby="talleres-heading">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <header className="text-center mb-12">
          <h2 id="talleres-heading" className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
            Talleres de Estimulación Temprana
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8" role="presentation"></div>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Talleres especializados de nuestro nido infantil para toda la familia educativa
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Talleres para padres y abuelos */}
          <article className="group">
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
          <article className="group">
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
          <article className="group">
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
          <article className="group">
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
      </motion.div>
    </section>
  )
}