export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        className="w-full h-auto block object-cover shadow-lg"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/portada.png"
        aria-label="Video de portada del sitio"
      >
        <source src="/video-portada.mov" type="video/mp4" />
        <source src="/videos/portada.webm" type="video/webm" />
        {/* Fallback para navegadores sin soporte de video */}
        <img 
          src="/images/portada.png" 
          alt="Portada del sitio - imagen alternativa"
          className="w-full h-auto block object-cover"
        />
      </video>
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}