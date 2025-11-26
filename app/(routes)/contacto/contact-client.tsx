"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ContactFormSchema } from "@/schemas/schemas";
import ContactForm from "@/components/contacto/form";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactoClient() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setStatus("idle");

    const result = ContactFormSchema.safeParse(formData);
    if (!result.success) {
      const formErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        formErrors[field] = err.message;
      });
      setErrors(formErrors);
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error("Error en el envío");

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <ContactForm
      formData={formData}
      status={status}
      errors={errors}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}