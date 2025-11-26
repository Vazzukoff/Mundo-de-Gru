export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Video de fondo */}
      <video
        className="w-full max-h-[88vh] object-cover block shadow-2xl
                   [mask-image:linear-gradient(to_bottom,black_0%,black_98%,transparent_100%)]"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/portada.png"
      >
        <source src="/video-portada.mp4" type="video/mp4" />
        <source src="/videos/portada.webm" type="video/webm" />
      </video>

      {/* Overlay con gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* Contenido principal */}
      <div className="absolute inset-0 flex flex-col justify-between text-center px-4 text-white">
        
        {/* Contenido superior */}
        <div className="mt-6 pt-8 md:pt-12">
          {/* Badge decorativo */}
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 px-6 py-2 rounded-full shadow-lg">
              <p className="text-white font-bold text-sm md:text-base tracking-wide">
                ¡Bienvenidos!
              </p>
            </div>
          </div>

          {/* Título principal */}
          <h1 
            id="hero-heading" 
            className="text-4xl md:text-6xl font-extrabold drop-shadow-2xl leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              ¡Admisión 2026 abierta!
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-4 max-w-xl mx-auto text-lg md:text-xl drop-shadow-lg font-medium">
            Matrículas abiertas para el próximo año, agenda una visita y conócenos
          </p>
        </div>

        {/* Botón inferior */}
        <div className="pb-8 mb-18 md:pb-12">
          <a
            href="/contacto"
            className="group inline-flex items-center gap-3 px-10 py-5 
                       bg-gradient-to-r from-cyan-500 to-amber-400 
                       hover:from-cyan-600 hover:to-amber-500 
                       text-white font-bold text-lg
                       rounded-xl shadow-2xl 
                       hover:shadow-cyan-500/50
                       transform hover:-translate-y-1 hover:scale-105
                       transition-all duration-300"
          >
            <span>Agenda una visita</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}