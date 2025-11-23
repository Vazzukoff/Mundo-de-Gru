import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-amber-400 inline-block">
        Nuestras redes sociales
      </h2>
      <ul className="space-y-4">
        <li>
          <a
            href="https://www.instagram.com/nidoelmundodegru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 hover:text-cyan-500 transition-colors group"
          >
            <FaSquareInstagram className="text-2xl group-hover:scale-110 transition-transform"/>
            <span className="font-medium">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/nidoelmundodegru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 hover:text-cyan-500 transition-colors group"
          >
            <FaFacebook className="text-2xl group-hover:scale-110 transition-transform"/>
            <span className="font-medium">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@nidoelmundodegru_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 hover:text-cyan-500 transition-colors group"
          >
            <FaTiktok className="text-2xl group-hover:scale-110 transition-transform"/>
            <span className="font-medium">TikTok</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

