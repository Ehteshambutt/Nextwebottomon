import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ottoman Beds",
  description: "Ottoman bed, divan beds, custom bed,matteress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}<Footer/></body>
    </html>
  );
}