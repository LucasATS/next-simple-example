import { Comfortaa } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";


const comfortaa = Comfortaa({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "loja",
  description: "loja app",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
