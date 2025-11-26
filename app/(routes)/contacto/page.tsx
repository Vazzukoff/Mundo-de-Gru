import ContactInfo from '@/components/contacto/contact-info';
import SocialMedia from '@/components/contacto/socials';
import MapSection from '@/components/contacto/mapa';
import Title from '@/components/contacto/title';
import ContactoClient from './contact-client';

export default function Contacto() {
  return (
    <>
      {/* tus scripts JSON-LD … */}

      <main className="bg-gray-50 min-h-screen py-12">
        <div className="w-full px-4 sm:px-6">
          <Title />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <aside className="space-y-8">
              <ContactInfo />
              <MapSection />
              <SocialMedia />
            </aside>

            <section aria-label="Formulario de contacto del nido infantil">
              <ContactoClient />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}