import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'El nombre es obligatorio')
    .max(50, 'El nombre no puede exceder los 50 caracteres'),

  phone: z
    .string()
    .trim()
    .min(1, 'El número de teléfono es obligatorio')
    .regex(/^[0-9+\-\s]+$/, 'El teléfono contiene caracteres inválidos')
    .max(20, 'El teléfono no puede exceder los 20 caracteres'),

  email: z
    .string()
    .trim()
    .min(1, 'El correo electrónico es obligatorio')
    .email('Correo electrónico inválido')
    .max(50, 'El correo electrónico no puede exceder los 50 caracteres'),

  message: z
    .string()
    .trim()
    .min(1, 'El mensaje es obligatorio')
    .max(500, 'El mensaje no puede exceder los 500 caracteres'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;