import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

// exposed as CSS variables on <html>, see layout.jsx

export const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
});

export const geist_mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
});

// Geist Pixel from Google Fonts, self-hosted since next/font/google only ships
// it from Next 16. Variable font: the ELSH axis picks the pixel shape
// (0 regular, 1 square) - use `font-variation-settings: "ELSH" 1`
export const geist_pixel = localFont({
  src: "./fonts/GeistPixel-Variable.woff2",
  weight: "400",
  variable: "--font-geist-pixel",
});
