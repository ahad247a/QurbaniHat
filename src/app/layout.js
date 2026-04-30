import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat - Livestock Booking Platform",
  description: "Find your best Qurbani animal online. Browse, compare, and book your perfect Qurbani animal with ease on QurbaniHat.",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        {/* 'min-h-screen' নিশ্চিত করবে যে ফুটার সবসময় নিচে থাকবে */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* Footer আমরা পরে এখানে যোগ করবো */}
      </body>
    </html>
  );
}
