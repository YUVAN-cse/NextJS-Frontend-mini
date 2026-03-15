import { Geist  } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Travel Guide Website",
  description: "A travel guide website built with Next.js, providing information on destinations, travel tips, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-sans bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
