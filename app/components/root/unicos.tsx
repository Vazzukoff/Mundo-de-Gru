import { MdFamilyRestroom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

export default function Unicos() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
            ¿Por qué somos únicos?
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Cyan */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-cyan-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MdFamilyRestroom className="text-4xl text-white"/>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-500 pb-2 inline-block">
                Nos enfocamos en la familia
              </h2>
              <p className="text-gray-600 font-medium leading-7">
                En el mundo de Gru aspiramos a forjar una estrecha relación con las familias para contribuir con la formación integral de los pequeños.
              </p>
            </div>
          </div>

          {/* Card 2 - Amber */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-amber-400 hover:-translate-y-2">
              <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <LuBrain className="text-4xl text-white"/>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2 inline-block">
                Nuestra metodología de enseñanza
              </h2>
              <p className="text-gray-600 font-medium leading-7">
                En nuestro nido, aplicamos una metodología basada en proyectos que estimula la curiosidad natural de los niños. A través del juego, 
                la exploración y la reflexión, desarrollan pensamiento crítico, creatividad y autonomía.
              </p>
            </div>
          </div>

          {/* Card 3 - Orange */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-orange-400 hover:-translate-y-2">
              <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHome className="text-4xl text-white"/>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-400 pb-2 inline-block">
                Un entorno que inspira al desarrollo
              </h2>
              <p className="text-gray-600 font-medium leading-7">
                Creemos que el ambiente es un educador más. Por eso, en nuestro nido, diseñamos espacios seguros, acogedores y estimulantes, donde cada rincón 
                invita a descubrir, crear y compartir.
              </p>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}