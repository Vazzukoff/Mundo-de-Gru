import "@/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Wapp from "@/utils/wapp";

export const metadata = {
  title: "Nido El Mundo de Gru",
  description:
    "El Mundo de Gru es un nido guardería y sala de estimulación temprana dedicada al cuidado y desarrollo integral de niños y niñas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-1 w-full m-0 p-0">{children}</main>
        <Footer />
        <Wapp />
      </body>
    </html>
  );
}