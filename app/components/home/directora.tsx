import Image from "next/image"

export default function Directora() {
  return (
    <section 
      className="bg-gray-50 py-16 px-4"
      aria-labelledby="directora-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 
            id="directora-heading"
            className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6"
          >
            Nuestra Directora de Nido Infantil
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8" role="presentation"></div>
        </header>

        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Imagen de la directora */}
            <div className="relative order-1 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-amber-100 rounded-2xl transform rotate-3 scale-105" role="presentation"></div>
              <div className="relative">
                <Image
                  src="/images/directora.JPG"
                  alt="Miss Gru - Directora fundadora del nido infantil El Mundo de Gru especializado en estimulación temprana"
                  className="relative w-full h-96 lg:h-[500px] rounded-2xl shadow-lg object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  width={800}
                  height={600}
                  loading="eager"
                />
                {/* Badge decorativo */}
                <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg transform rotate-3">
                  <p className="font-bold text-lg">Directora Fundadora</p>
                </div>
              </div>
            </div>

            {/* Información de la directora */}
            <div className="space-y-6 order-2 lg:order-2">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  Miss Gru
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-400 mb-4 rounded-full" role="presentation"></div>
              </div>

              <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
                <p className="text-lg">
                  Hola, soy Grushenka Bezzubikoff y tengo el privilegio de dirigir El Mundo de Gru. He dedicado más de 
                  <strong className="text-cyan-600"> 30 años a acompañar niños, niñas y familias desde el amor, respeto y escucha atenta</strong> en nuestro nido.
                </p>
                <p className="text-lg">
                  Mi compromiso en nuestro nido es ofrecer un espacio seguro y cálido en donde <strong className="text-amber-500">cada pequeño pueda crecer a su 
                  propio ritmo</strong> a través de estimulación temprana personalizada.
                </p>
                <p className="text-lg">
                  Mi objetivo no es solo forjar un lazo con los niños sino también con sus familias para así 
                  <strong className="text-orange-500"> trabajar juntos en su desarrollo integral</strong>. Los invito a conocernos y ser parte de nuestra gran familia.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}