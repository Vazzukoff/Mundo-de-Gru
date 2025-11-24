export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        className="w-full max-h-[88vh] object-cover block shadow-lg
        [mask-image:linear-gradient(to_bottom,black_0%,black_98%,transparent_100%)]"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/portada.png"
        aria-label="Video de portada del sitio"
      >
        <source src="/video-portada.mov" type="video/mp4" />
        <source src="/videos/portada.webm" type="video/webm" />
      </video>
    </div>
  );
}