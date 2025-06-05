import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";
import Footer from "@/components/layout/Footer";

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
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
