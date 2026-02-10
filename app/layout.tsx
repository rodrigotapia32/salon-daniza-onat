import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DANIZA OÑAT / LAKSHMI – Coloristas y estilistas profesionales en Maipú",
  description:
    "Demo de sitio web con agendamiento online para el salón de belleza DANIZA OÑAT / LAKSHMI, ubicado en Maipú, Santiago de Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

