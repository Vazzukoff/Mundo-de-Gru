import QuienesSomos from "@/components/home/quienes-somos";
import Instalaciones from "@/components/home/instalaciones";
import Unicos from "@/components/home/unicos";
import Directora from "@/components/home/directora";
import Galeria from "@/components/home/galeria";
import Hero from "@/components/home/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nido Infantil El Mundo de Gru | Guardería y Estimulación Temprana en Lima",
  description: "Nido infantil y guardería especializada en estimulación temprana en Magdalena del Mar, Lima. Ofrecemos educación inicial de calidad para niños de 0 a 5 años con instalaciones modernas y programas personalizados.",
  keywords: [
    "nido infantil",
    "guardería",
    "estimulación temprana",
    "nido infantil Lima",
    "guardería Magdalena del Mar",
    "educación inicial",
    "cuidado infantil",
    "estimulación temprana Lima",
    "nido El Mundo de Gru",
    "guardería Lima Perú"
  ],
  authors: [{ name: "El Mundo de Gru" }],
  openGraph: {
    title: "Nido Infantil El Mundo de Gru | Guardería y Estimulación Temprana",
    description: "El mejor nido infantil en Magdalena del Mar. Guardería especializada en estimulación temprana para el desarrollo integral de niños de 0 a 5 años.",
    url: "https://www.nidomundodegru.com",
    siteName: "El Mundo de Gru - Nido Infantil",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nido Infantil El Mundo de Gru - Guardería y Estimulación Temprana",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nido Infantil El Mundo de Gru | Guardería y Estimulación Temprana",
    description: "Guardería especializada en estimulación temprana en Magdalena del Mar, Lima",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.nidomundodegru.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ChildCare",
            name: "El Mundo de Gru - Nido Infantil",
            description: "Nido infantil y guardería especializada en estimulación temprana en Magdalena del Mar, Lima",
            url: "https://www.nidomundodegru.com",
            telephone: "+51968275363",
            email: "nidoelmundodegru@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jirón Trujillo 370",
              addressLocality: "Magdalena del Mar",
              addressRegion: "Lima",
              postalCode: "15076",
              addressCountry: "PE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -12.0953743,
              longitude: -77.0624951,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
            ],
            priceRange: "$$",
            image: "https://www.nidomundodegru.com/images/instalaciones/aula.JPG",
            sameAs: [
              "https://www.instagram.com/elmundodegru_",
              "https://www.facebook.com/nidoelmundodegru",
              "https://www.tiktok.com/@nidoelmundodegru_",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "1",
            },
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen select-none">
        <Hero />
        <QuienesSomos />
        <Instalaciones />
        <Unicos />
        <Directora />
        <Galeria />
      </main>
    </>
  );
}