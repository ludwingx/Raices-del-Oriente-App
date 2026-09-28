import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/nav";
import "@/styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Raíces del Oriente — Boutique de Bonsáis Exclusivos en Bolivia",
  description:
    "Cultivo y venta de bonsáis de interior y exterior en Bolivia. Especímenes vivos de autor con macetas artesanales, guía de cuidados y envíos garantizados a Santa Cruz, La Paz y Cochabamba.",
  keywords: [
    "bonsais bolivia",
    "comprar bonsai santa cruz",
    "bonsai bolivia precios",
    "raices del oriente",
    "arboles miniatura",
    "ficus ginseng bolivia",
    "juniperus shimpaku",
    "arte botanico",
  ],
  openGraph: {
    title: "Raíces del Oriente — Bonsáis de Colección",
    description: "La armonía de la naturaleza en tu espacio vivo. Envíos especializados en toda Bolivia.",
    url: "https://raicesdeloriente.com",
    siteName: "Raíces del Oriente",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
