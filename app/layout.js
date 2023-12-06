import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "./component/NavbarComp";
import FooterComp from "./component/FooterComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amarillo | Company Profile",
  description: "Digital Creative Agency",
  openGraph: {
    title: "Amarillo | Company Profile",
    description: "Digital Creative Agency",
    image: `/imam2.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
