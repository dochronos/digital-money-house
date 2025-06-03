import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import HeaderLayout from "@/components/layout/HeaderLayout";
import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "@/context/authContext"; // <-- Importa el provider

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Money",
  description: "A digital money app built with Next.js and Tailwind CSS",
  keywords: ["Digital Money", "Next.js", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`w-full min-h-screen bg-dark1 text-white ${openSans.className}`}
      >
        <AuthProvider>
          <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-green">
              <Sidebar />
            </aside>

            {/* Main content */}
            <div className="flex flex-col flex-1">
              <HeaderLayout />
              <main className="flex-1 p-4 md:p-8">{children}</main>
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
