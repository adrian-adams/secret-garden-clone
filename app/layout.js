import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  charset: "UTF-8",
  name: { viewport: "width=device-width, initial-scale=1",},
  title: "Secret Garden",
  description: "Our new collection of plants delivered to your door",
  link: {
    href: "https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700,1&display=swap",
    rel: "stylesheet"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body>
        {children}
      </body>
    </html>
  );
}
