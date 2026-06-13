import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "@/providers";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "ROUGE INST",
    template: "%s | ROUGE INST",
  },
  description: "ROUGE INST — Coaching Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}