import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epsilon Innovation Group",
  description: "Consulting and R&D in energy, climate, and resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        <NextTopLoader color="#3b72d8" height={3} showSpinner={false} />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
