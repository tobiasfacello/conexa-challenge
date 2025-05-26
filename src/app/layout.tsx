//! React Core
import { ReactNode } from 'react';

//! Next Core
import type { Metadata } from "next";
import localFont from "next/font/local";

//! Providers
import CharactersProvider from '@/providers/CharactersProvider';
import EpisodesProvider from '@/providers/EpisodesProvider';
import TanstackProvider from "@/providers/TanstackProvider";

//! Fonts
const NeueMontrealBook = localFont({
  src: [
    {
      path: "../../public/fonts/ppneuemontreal-book.otf",
      weight: "400",
    },
  ],
  variable: "--font-neue-montreal-book",
});

const NeueMontrealMedium = localFont({
  src: [
    {
      path: "../../public/fonts/ppneuemontreal-medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-neue-montreal-medium",
});

const NeueMontrealBold = localFont({
  src: [
    {
      path: "../../public/fonts/ppneuemontreal-bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neue-montreal-bold",
});

//! Metadata
export const metadata: Metadata = {
  title: 'Conexa | "Rick & Morty" Technical Challenge',
  description: 'Conexa | "Rick & Morty" Technical Challenge',
  openGraph: {
    title: 'Conexa | "Rick & Morty" Technical Challenge',
    description: 'Conexa | "Rick & Morty" Technical Challenge',
    url: 'fache-conexa-challenge.vercel.app',
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${NeueMontrealBook.variable} ${NeueMontrealMedium.variable} ${NeueMontrealBold.variable}`}>
        <TanstackProvider>
          <CharactersProvider>
            <EpisodesProvider>
              {children}
            </EpisodesProvider>
          </CharactersProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}