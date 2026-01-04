import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { CursorGlow } from "@/components/CursorGlow";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah | Technologist & Entrepreneur",
  description: "Portfolio of Muhammad Abdullah, a technologist, entrepreneur, and founder of Weblopy and Purion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white selection:bg-cyan-500 selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <LanguageProvider>
                <CursorGlow />
                <Navbar />
                {children}
                <Footer />
            </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
