import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@siberui/react/globals.css";
import "./globals.css";
import { ToastProvider } from "@siberui/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <title>Siber UI | Minimalist Cyberpunk React Kit</title>
        <meta name="description" content="Build the future with Siber UI. A minimalist cyberpunk React UI kit." />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#06090e] text-[#ededed]">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
