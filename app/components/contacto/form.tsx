import type { ChangeEvent, FormEvent } from 'react';
import FormInput from '@/components/contacto/form-input';
import FormTextarea from '@/components/contacto/text-area';
import StatusMessage from '@/components/contacto/status-message';

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

type ContactFormProps = {
  formData: ContactFormData;
  errors: ContactFormErrors;
  status: 'idle' | 'success' | 'error' | string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function ContactForm({
  formData,
  errors,
  status,
  onSubmit,
  onChange,
}: ContactFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100 to-transparent rounded-bl-full opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">¡Ven a conocernos!</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-amber-400 mb-4 rounded-full"></div>
        <p className="mb-8 text-gray-600 font-medium leading-relaxed">
          Agenda tu visita guiada y descubre nuestro nido lleno de juegos, colores y aprendizajes
        </p>

        <form className="space-y-6" onSubmit={onSubmit}>
          <FormInput
            label="Nombre del adulto"
            id="name"
            type="text"
            value={formData.name}
            onChange={onChange}
            placeholder="¿Cómo te llamas?"
            error={errors.name}
          />

          <FormInput
            label="Correo Electrónico"
            id="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="nombre@email.com"
            error={errors.email}
          />

          <FormInput
            label="Número telefónico"
            id="phone"
            type="text"
            value={formData.phone}
            onChange={onChange}
            placeholder="¿Cuál es tu número?"
            error={errors.phone}
          />

          <FormTextarea
            label="Mensaje o consulta"
            id="message"
            value={formData.message}
            onChange={onChange}
            placeholder="¿Hay algo que quieras preguntarnos?"
            error={errors.message}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-amber-400 hover:from-cyan-600 
                      hover:to-amber-500 text-white font-bold py-4 px-6 rounded-lg transition-all 
                      duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Enviar mensaje
          </button>

          <StatusMessage status={status} />
        </form>
      </div>
    </div>
  );
}