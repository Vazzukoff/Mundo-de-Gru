export default function Hero () {
  return (
    <div className="relative w-full">
      <img 
        src="/images/portada.png" 
        alt="Portada" 
        className="w-full h-auto block object-cover shadow-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  )
}