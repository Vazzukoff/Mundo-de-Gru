type StatusMessageProps = {
  status: 'idle' | 'success' | 'error' | string;
};

export default function StatusMessage ({ status }: StatusMessageProps) {
  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 font-medium">
        ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 font-medium">
        Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
      </div>
    );
  }

  return null;
}