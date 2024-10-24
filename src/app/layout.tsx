import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/nav";
// Importar Material UI antes
import "@/app/globals.css"; // Colocar al final para dar mayor prioridad

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
  title: "Bonsais para ti",
  description: "Explora nuestros bonsais exclusivos para mejorar tu entorno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
