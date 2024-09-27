
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

import "./globals.css";
import { Menu } from "../components/menu";
import { Footer } from "../components/footer";

const roboto = Roboto({

  weight: ["100", "400", "500"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]

})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased` }
      >
        <Menu op1="ju" op3={false} op2={2}/>
        {children}
        <Footer op1="ju" op3={false} op2={2}/>
      </body>
    </html>
  );
}
