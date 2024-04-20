import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <body className={mont.className}>
          <Navbar />
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
