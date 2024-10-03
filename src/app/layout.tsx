// Externa
import localFont from "next/font/local";
import { Roboto, Silkscreen } from "next/font/google";

// Interna
import "./globals.css";
import { Menu } from "../components/menu";

const roboto = Roboto({

  weight: ["100", "400", "500"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]

})

const code = Silkscreen({

  weight: ["400", "700"],
  style: "normal",
  variable: "--code",
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


  
export default function RootLayout({ children, }: Readonly <{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${code.variable} antialiased` }>
        
        <Menu op1="🏡Home" op3="Calculator"/>
        {children}
      </body>
    </html>
  );
}
