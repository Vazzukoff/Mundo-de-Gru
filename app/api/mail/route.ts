import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Mensaje de ${name}`,
      text: `
Nuevo mensaje desde el formulario de contacto:

Nombre: ${name}
Correo: ${email}
Teléfono: ${phone}

Mensaje:
${message}
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return Response.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}