import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Barlow } from "next/font/google";
import { ToastContainer } from "react-toastify";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Busca CEP",
  description: "Um buscador de CEP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${barlow.className} bg-gray-800`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
