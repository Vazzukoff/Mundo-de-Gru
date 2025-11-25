export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <video
        className="w-full max-h-[88vh] object-cover block shadow-lg
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

      {/* Overlay content for SEO and UX */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white bg-black/30">
        <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          ¡Admisión 2026 abierta!
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl drop-shadow">
          Matrículas abiertas para el próximo año, agenda una visita y conócenos
        </p>

        <a
          href="/contacto"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
          Agendar una visita
        </a>
      </div>
    </section>
  );
}