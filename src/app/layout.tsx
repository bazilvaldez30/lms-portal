import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../styles/globals.css";
import "animate.css";
import Navbar from "../components/navbar";

import { Toaster } from "react-hot-toast";
import Providers from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OLAS",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Providers>
          <Navbar />
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
