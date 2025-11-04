import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consultorio Psicológico Virtual - Atención Profesional de Salud Mental",
  description: "Centro de atención psicológica profesional. Ofrecemos terapia individual, de pareja, familiar y tratamiento de diversos trastornos mentales. Cuidamos tu bienestar emocional.",
  keywords: ["psicología", "terapia", "salud mental", "consultorio psicológico", "psicólogo", "atención psicológica"],
  authors: [{ name: "Consultorio Psicológico Virtual" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Consultorio Psicológico Virtual",
    description: "Centro de atención psicológica profesional. Cuidamos tu bienestar emocional.",
    siteName: "Consultorio Psicológico Virtual",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
