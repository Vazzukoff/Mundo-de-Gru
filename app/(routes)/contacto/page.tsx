"use client";

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import ContactInfo from '@/components/contacto/contact-info';
import SocialMedia from '@/components/contacto/socials';
import ContactForm from '@/components/contacto/form';
import MapSection from '@/components/contacto/mapa';
import Title from '@/components/contacto/title';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aquí iría tu validación con ContactFormSchema
    // const result = contactoSchema.safeParse(formData);
    
    setErrors({});

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
      
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="w-full px-4 sm:px-6">
        
        <Title />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8 w-full max-w-full overflow-hidden">
            <ContactInfo />
            <MapSection />
            <SocialMedia />
          </div>

          <div className="w-full max-w-full">
            <ContactForm
              formData={formData}
              errors={errors}
              status={status}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}