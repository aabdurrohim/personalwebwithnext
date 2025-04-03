import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Abe | Personal Website",
  description: "Showing some of my activities, achievements and experiences in the field of information technology",
  metadataBase: new URL("https://yourwebsite.com"),
  icons: "/images/avatar.png",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Abe | Personal Website",
    description: "Showing some of my activities, achievements and experiences in the field of information technology",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${poppins.variable}
          font-sans antialiased min-h-screen flex flex-col
        `}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
