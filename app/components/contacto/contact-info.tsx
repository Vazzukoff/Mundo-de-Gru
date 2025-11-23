
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// Sub-componente: Información de Contacto
export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-cyan-500 inline-block">
        Información de contacto
      </h2>
      <ul className="space-y-6">
        <li className="flex items-start gap-4">
          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FaLocationDot className="text-white text-lg" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
            <a
              href="https://www.google.com/maps/place/Nido+El+Mundo+de+GRU/@-12.0953743,-77.0624951,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c9c112bbd7fd:0x691aad9376ccb075!8m2!3d-12.0953743!4d-77.0624951!16s%2Fg%2F11rqrm6krr?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cyan-500 transition-colors font-medium"
            >
              Jirón Trujillo 370, Magdalena del Mar
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
            <FaPhoneAlt className="text-white text-lg"/>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
            <a
              href="http://wa.me/51968275363"
              className="text-gray-600 hover:text-amber-500 transition-colors font-medium"
            >
              +51 968 275 363
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
            <MdOutlineMailOutline className="text-white text-lg"/>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <span className="text-gray-600 font-medium">nidoelmundodegru@gmail.com</span>
          </div>
        </li>
      </ul>
    </div>
  );
};