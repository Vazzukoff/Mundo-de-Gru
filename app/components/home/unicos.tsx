import { MdFamilyRestroom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

export default function Unicos() {
  return (
    <section 
      className="bg-gray-50 py-16 px-4"
      aria-labelledby="unicos-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 
            id="unicos-heading"
            className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6"
          >
            ¿Por qué nuestro nido infantil es único?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full" role="presentation"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Enfoque Familiar */}
          <article className="group">
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
                En El mundo de Gru, nuestro nido aspira a forjar una estrecha relación no solo con los pequeños sino también con las familias para contribuir con la formación integral de los pequeños, creando una comunidad de guardería comprometida con el desarrollo de cada niño.
              </p>
            </div>
          </article>

          {/* Card 2 - Metodología */}
          <article className="group">
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
                En nuestro nido , aplicamos una metodología de estimulación temprana basada en proyectos que estimula la curiosidad natural de los niños. A través del juego, 
                la exploración y la reflexión en nuestra guardería, desarrollan pensamiento crítico, creatividad y autonomía desde temprana edad.
              </p>
            </div>
          </article>

          {/* Card 3 - Entorno */}
          <article className="group">
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
                Creemos que el ambiente es un educador más. Por eso, en nuestro nido infantil, diseñamos espacios seguros de guardería, acogedores y estimulantes para estimulación temprana, donde cada rincón 
                invita a descubrir, crear y compartir en un entorno de aprendizaje óptimo.
              </p>
            </div>
          </article>
        </div>
      </div>      
    </section>
  )
}