import type { Metadata } from "next";
import { Sarala, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const sarala = Sarala({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Đặng Tiến Dũng | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in AI, Frontend, Backend, and Mobile app development. Building end-to-end solutions from intelligent AI systems to polished web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sarala.className} ${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
