import { MdOutlineToys } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { FaHeart, FaAppleAlt } from "react-icons/fa";

export default function ServiciosExtra () {
  return (
    <div>
      <div className="mb-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                  <MdOutlineToys className="text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Guardería
                  </h2>
                  <div className="w-16 h-0.5 bg-cyan-500 mt-1"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                Acogemos a los niños con amor y respeto, fomentando su autonomía y confianza en sí mismos. Entre juegos, 
                risas y momentos de exploración, construimos a lo largo del día lazos de amistad que fortalecen su desarrollo 
                emocional y social.
              </p>
              <div className="flex items-center gap-3 bg-cyan-50 p-4 rounded-lg">
                <FaHeart className="text-cyan-500 text-xl" />
                <span className="text-cyan-700 font-semibold">Atención personalizada</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl transform rotate-3 scale-105"></div>
              <img
                src="/images/servicios/guarderia/guarderia.JPG"
                alt="Guardería"
                className="relative w-full h-80 lg:h-96 rounded-2xl shadow-lg object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl transform -rotate-3 scale-105"></div>
              <img
                src="/images/servicios/comedor/comedor.JPG"
                alt="Comedor"
                className="relative w-full h-80 lg:h-96 rounded-2xl shadow-lg object-cover transform rotate-1 hover:rotate-0 transition-transform duration-300"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                  <FaUtensils className="text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Comedor
                  </h2>
                  <div className="w-16 h-0.5 bg-amber-400 mt-1"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                Ofrecemos comida diaria con proteínas, carbohidratos y grasas saludables para el crecimiento de tu hijo, complementando 
                su desarrollo cognitivo. Los menús son recomendados por una nutricionista especializada en niños.
              </p>
              <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg">
                <FaAppleAlt className="text-amber-500 text-xl" />
                <span className="text-amber-700 font-semibold">Menús balanceados y nutritivos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}