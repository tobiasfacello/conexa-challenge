//! Next Core
import type { Metadata } from "next";

//! Metadata
export const metadata: Metadata = {
  title: 'Conexa | "Rick & Morty" Technical Challenge',
  description: 'Conexa | "Rick & Morty" Technical Challenge',
  openGraph: {
    title: 'Conexa | "Rick & Morty" Technical Challenge',
    description: 'Conexa | "Rick & Morty" Technical Challenge',
    // url: 'URL_ADDRESS-and-morty-tech-challenge.vercel.app/',
    siteName: 'Conexa | "Rick & Morty" Technical Challenge',
    images: [
      {
        url: new URL(
          'https://res.cloudinary.com/dxfbsnehm/image/upload/v1747790408/Technical%20Challenges/Thumbnail_z1zxhc.png'
        ),
      },
    ],
  },
  twitter: {
    title: 'Conexa | "Rick & Morty" Technical Challenge',
    description: 'Conexa | "Rick & Morty" Technical Challenge',
    images: [
      new URL(
        'https://res.cloudinary.com/dxfbsnehm/image/upload/v1747790408/Technical%20Challenges/Thumbnail_z1zxhc.png'
      ),
    ],
  },
};

//* Styles
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
