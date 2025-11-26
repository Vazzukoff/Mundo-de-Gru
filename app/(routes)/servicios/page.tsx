import Talleres from "@/components/servicios/talleres";
import Title from "@/components/servicios/title";
import ServiciosExtra from "@/components/servicios/servicios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Guardería y Estimulación Temprana | Nido Infantil El Mundo de Gru",
  description: "Servicios de guardería, comedor nutritivo, talleres de estimulación temprana para padres y nanas. Nido infantil especializado en desarrollo integral de niños de 0 a 5 años en Lima.",
  keywords: [
    "servicios de guardería",
    "estimulación temprana",
    "nido infantil Lima",
    "talleres para padres",
    "comedor infantil",
    "guardería Magdalena del Mar",
    "talleres de crianza",
    "capacitación nanas",
    "nutrición infantil",
    "educación inicial Lima"
  ],
  openGraph: {
    title: "Servicios de Guardería y Estimulación Temprana | El Mundo de Gru",
    description: "Guardería integral con talleres especializados en estimulación temprana, comedor nutritivo y programas para toda la familia educativa.",
    url: "https://www.nidomundodegru.com/servicios",
    siteName: "El Mundo de Gru - Nido Infantil",
    images: [
      {
        url: "/images/servicios/og-servicios.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de guardería y estimulación temprana del nido infantil El Mundo de Gru",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Guardería y Estimulación Temprana | El Mundo de Gru",
    description: "Guardería integral, talleres y programas especializados en desarrollo infantil",
    images: ["/images/servicios/og-servicios.jpg"],
  },
  alternates: {
    canonical: "https://www.nidomundodegru.com/servicios",
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

export default function Servicios() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Servicios de Nido Infantil y Guardería",
            "description": "Servicios integrales de guardería y estimulación temprana",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Servicio de Guardería",
                "description": "Cuidado integral de niños con atención personalizada, fomentando autonomía y desarrollo emocional y social",
                "provider": {
                  "@type": "ChildCare",
                  "name": "El Mundo de Gru - Nido Infantil",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Jirón Trujillo 370",
                    "addressLocality": "Magdalena del Mar",
                    "addressRegion": "Lima",
                    "addressCountry": "PE"
                  }
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Lima"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Servicio de Comedor",
                "description": "Alimentación balanceada con menús diseñados por nutricionista especializada en niños, con proteínas, carbohidratos y grasas saludables",
                "provider": {
                  "@type": "ChildCare",
                  "name": "El Mundo de Gru - Nido Infantil"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Talleres de Estimulación Temprana para Padres",
                "description": "Talleres especializados para padres y abuelos sobre habilidades de crianza, comunicación y apoyo emocional",
                "provider": {
                  "@type": "ChildCare",
                  "name": "El Mundo de Gru - Nido Infantil"
                }
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Talleres para Nanas y Cuidadores",
                "description": "Capacitación profesional en primeros auxilios, estimulación temprana y manejo de conductas",
                "provider": {
                  "@type": "ChildCare",
                  "name": "El Mundo de Gru - Nido Infantil"
                }
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Taller de Nutrición Infantil",
                "description": "Formación sobre alimentación saludable infantil, loncheras nutritivas y hábitos alimentarios positivos",
                "provider": {
                  "@type": "ChildCare",
                  "name": "El Mundo de Gru - Nido Infantil"
                }
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "Taller Proyecto de Familia",
                "description": "Construcción de plan familiar enfocado en valores, comunicación efectiva y ambiente hogareño que favorezca el desarrollo integral",
                "provider": {
                  "@type": "ChildCare",
                  "name": "El Mundo de Gru - Nido Infantil"
                }
              }
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Guardería y Estimulación Temprana",
            "provider": {
              "@type": "ChildCare",
              "name": "El Mundo de Gru - Nido Infantil",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jirón Trujillo 370",
                "addressLocality": "Magdalena del Mar",
                "addressRegion": "Lima",
                "postalCode": "15076",
                "addressCountry": "PE"
              },
              "telephone": "+51968275363",
              "email": "nidoelmundodegru@gmail.com",
              "url": "https://www.nidomundodegru.com/servicios"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lima, Magdalena del Mar"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Nido Infantil",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Guardería Integral",
                    "description": "Servicio completo de guardería con estimulación temprana"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Talleres Especializados",
                    "description": "Talleres de estimulación temprana para padres, nanas y familias"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Comedor Nutritivo",
                    "description": "Alimentación balanceada supervisada por nutricionista"
                  }
                }
              ]
            }
          }),
        }}
      />

      <main className="bg-gray-50 min-h-screen py-12 select-none">
        <Title />
        <ServiciosExtra />
        <Talleres />
      </main>
    </>
  );
}