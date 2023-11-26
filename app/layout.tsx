import { Nunito } from "next/font/google";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Modal from "./components/modal/Modal";
import RegisterModal from "./components/modal/RegisterModal";

export const metadata: Metadata = {
  title: "Booking.com",
  description: "Booking.com",
};
const inter = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModal />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
