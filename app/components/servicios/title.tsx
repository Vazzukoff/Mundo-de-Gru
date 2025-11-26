export default function Title() {
  return (
    <header className="text-center mb-16">
      <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
        Servicios adicionales
      </h1>
      <div 
        className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"
        role="presentation"
      ></div>
      <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
        Brindamos servicios integrales de guardería y{' '}
        estimulación temprana para el desarrollo y bienestar 
        de tu pequeño en nuestro nido
      </p>
    </header>
  )
}