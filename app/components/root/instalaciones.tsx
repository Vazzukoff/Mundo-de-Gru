

export default function Instalaciones() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
            Nuestras Instalaciones
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Espacios diseñados especialmente para el desarrollo integral de tu pequeño
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instalación 1 */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent z-10"></div>
                <img
                  src="/images/instalaciones/aula.JPG"
                  alt="Aulas Educativas"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Aulas Educativas</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-cyan-500 pb-2 inline-block">
                  Aulas Educativas
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Nuestras aulas son amplias, luminosas y organizadas por contextos de aprendizaje. Cada espacio 
                  está cuidadosamente preparado para invitar a la exploración, el juego y el descubrimiento.
                </p>
              </div>
            </div>
          </div>

          {/* Instalación 2 */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent z-10"></div>
                <img
                  src="/images/instalaciones/gimnasio.JPG"
                  alt="Área de Juegos"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-400 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Gimnasio</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-amber-400 pb-2 inline-block">
                  Gimnasio
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Espacio seguro y amplio equipado con colchonetas, rampas, túneles, bloques y materiales suaves que invitan a trepar, saltar y explorar sus capacidades motoras.
                </p>
              </div>
            </div>
          </div>

          {/* Instalación 3 */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent z-10"></div>
                <img
                  src="/images/instalaciones/comedor.JPG"
                  alt="Comedor"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-400 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Comedor</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-orange-400 pb-2 inline-block">
                  Comedor
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Nuestro comedor es un espacio acogedor y cuidadosamente diseñado en donde los niños disfrutan alimentos 
                  nutritivos a la vez que experimentan autonomía y convivencia.
                </p>
              </div>
            </div>
          </div>

          {/* Instalación 4 */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent z-10"></div>
                <img
                  src="/images/instalaciones/sala-psicomotriz.jpg"
                  alt="Sala Psicomotriz"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-sm">Sala Psicomotriz</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-cyan-500 pb-2 inline-block">
                  Sala Psicomotriz
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Amplio espacio seguro y cuidadosamente diseñado para favorecer el movimiento libre y el desarrollo corporal de los niños. Cuenta con colchonetas, rampas, túneles, bloques 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}