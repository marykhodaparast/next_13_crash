import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Header from './components/Header';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Traversy Media",
  description: "Web development tutorials and courses",
  keywords: "Web development, Web desing, html, css, js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
