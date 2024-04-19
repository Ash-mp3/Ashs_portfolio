import { Open_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Portfolio - Asher Contreras",
    description: "Portfolio by Asher Contreras",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
      <html lang="en" >
        <body id="body" className={openSans.className}>{children}</body>
      </html>
  );
}
