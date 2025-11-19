import type { Metadata } from "next";
import { Sarala } from "next/font/google";
import "./globals.css";

const sarala = Sarala({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Đặng Tiến Dũng | AI Full Stack Portfolio",
  description:
    "Full stack developer focused on AI-native products, delivering intelligent experiences from idea to deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sarala.className} antialiased`}>{children}</body>
    </html>
  );
}
