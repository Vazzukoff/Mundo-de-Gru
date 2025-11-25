import Link from "next/link";
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer 
      className="bg-white border-t border-gray-100 shadow-lg mt-8"
      role="contentinfo"
    >
      <div className="h-0.5 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400" role="presentation"></div>
      
      <div className="py-8 px-4 sm:px-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Redes Sociales */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-gray-800 mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
              Síguenos en Redes Sociales
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/elmundodegru_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram - Nido Infantil El Mundo de Gru"
                  className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors duration-300 justify-center md:justify-start group"
                >
                  <FaSquareInstagram className="text-xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="font-medium">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/nidoelmundodegru"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita nuestra página de Facebook - Guardería El Mundo de Gru"
                  className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors duration-300 justify-center md:justify-start group"
                >
                  <FaFacebook className="text-xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="font-medium">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@nidoelmundodegru_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Míranos en TikTok - Nido Infantil El Mundo de Gru"
                  className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors duration-300 justify-center md:justify-start group"
                >
                  <FaTiktok className="text-xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="font-medium">TikTok</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navegación */}
          <nav 
            className="text-center"
            aria-label="Navegación del pie de página"
          >
            <h3 className="font-bold text-lg text-gray-800 mb-4 pb-2 border-b-2 border-amber-400 inline-block">
              <Link 
                href="/" 
                className="hover:text-amber-500 transition-colors duration-300"
                aria-label="El Mundo de Gru - Nido Infantil"
              >
                El mundo de Gru
              </Link>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-cyan-500 transition-colors duration-300 font-medium"
                  aria-label="Ir a la página de inicio"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios" 
                  className="text-gray-600 hover:text-amber-500 transition-colors duration-300 font-medium"
                  aria-label="Ver servicios de guardería y estimulación temprana"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-medium"
                  aria-label="Contactar con el nido infantil"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
  
          {/* Información de Contacto */}
          <address className="text-center md:text-right not-italic">
            <h3 className="font-bold text-lg text-gray-800 mb-4 pb-2 border-b-2 border-orange-400 inline-block">
              Contáctanos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="http://wa.me/51968275363"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Llámanos al teléfono +51 968 275 363"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 justify-center md:justify-end group"
                >
                  <FaPhoneAlt className="text-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="font-medium">+51 968 275 363</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Nido+El+Mundo+de+GRU/@-12.0953743,-77.0624951,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c9c112bbd7fd:0x691aad9376ccb075!8m2!3d-12.0953743!4d-77.0624951!16s%2Fg%2F11rqrm6krr?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ubicación del nido infantil: Jirón Trujillo 370, Magdalena del Mar, Lima"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 justify-center md:justify-end group"
                >
                  <FaLocationDot className="text-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="font-medium">Jirón Trujillo 370, Magdalena del Mar</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nidoelmundodegru@gmail.com"
                  aria-label="Envíanos un correo a nidoelmundodegru@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 justify-center md:justify-end group"
                >
                  <MdOutlineMailOutline className="text-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="font-medium">nidoelmundodegru@gmail.com</span>
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Copyright y descripción SEO */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm font-medium max-w-3xl mx-auto leading-relaxed">
              <strong>El Mundo de Gru</strong> - Nido infantil y guardería especializada en estimulación temprana 
              ubicada en Magdalena del Mar, Lima. Ofrecemos educación inicial de calidad con programas 
              personalizados para el desarrollo integral de niños de 0 a 5 años.
            </p>
          </div>
          <p className="text-gray-500 text-sm font-medium text-center">
            © 2025 El mundo de Gru - Nido Infantil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}