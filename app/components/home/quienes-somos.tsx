export default function QuienesSomos() {
  return ( 
    <section 
      className="bg-gray-50 py-16 px-4"
      aria-labelledby="quienes-somos-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="quienes-somos-heading"
            className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6"
          >
            ¿Quiénes somos?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8" role="presentation"></div>
        </div>

        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-center font-medium text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong className="text-cyan-600 font-bold">El mundo de Gru</strong> es un{' '}
              nido y centro de educación inicial conformado por profesionales apasionados y especializados en el{' '}
              desarrollo integral de niños y niñas de hasta 5 años.
            </p>

            <p className="text-lg">
              Como centro especializado en estimulación temprana, nuestro propósito es brindar un{' '}
              <strong className="text-amber-400">espacio seguro, alegre y lleno de aprendizaje</strong>, 
              donde los valores y el juego se convierten en las principales herramientas para formar grandes personas.
            </p>

            <p className="text-lg">
              Creemos en la importancia de{' '}
              <strong className="text-orange-400">construir una relación cercana no solo con los pequeños, sino también con sus familias</strong>, integrándolas activamente 
              en el proceso educativo de estimulación temprana para crear una verdadera comunidad comprometida con el bienestar y crecimiento de cada niño.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}