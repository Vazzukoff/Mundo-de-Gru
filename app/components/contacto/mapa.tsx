import GoogleMapsComponent from "@/utils/google-maps";


export default function MapSection () {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-cyan-500 inline-block">
        Encuéntranos
      </h2>
      <div className="w-full max-w-full">
        {/* Placeholder para el mapa - reemplaza con tu GoogleMapsComponent */}
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <GoogleMapsComponent />
        </div>
      </div>
    </div>
  );
}