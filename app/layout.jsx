// "use client";

import "./globals.css";
import { Inter } from "next/font/google";

import { geist, geist_mono, geist_pixel } from "./fonts";

const font = Inter({ subsets: ["latin"] });
const font_vars = [geist, geist_mono, geist_pixel]
  .map((f) => f.variable)
  .join(" ");

import Navbar from "./Navbar";
import Footer from "./Footer";
import Stars from "./Stars";

// TODO can't have both metadata on theme coz latter needs client
// import { ThemeProvider, ThemeContext } from "./Theme";
// import { useContext } from "react";

export const metadata = {
  title: "IITB Rocket Team",
  description: "Admire the rockets, view past launches, and meet the team",
};

const App = ({ children }) => {
  // const { theme } = useContext(ThemeContext);

  return (
    <html lang="en" className={"dark-theme " + font_vars}>
      <body className={font.className}>
        <Stars />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default function RootLayout({ children }) {
  return (
    // <ThemeProvider>
    <App>{children}</App>
    // </ThemeProvider>
  );
}
