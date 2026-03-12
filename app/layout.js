<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Geist, Geist_Mono } from "next/font/google";
=======
=======
>>>>>>> Stashed changes
// Components
import Navigation from "@/components/navigation/server/navigation";
import CartProvider from '@/components/products/client/cart-provider';
import Footer from "@/components/footer/server/footer";
// Fonts
import { League_Spartan } from "next/font/google";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
})

<<<<<<< Updated upstream
=======
// Metadata
>>>>>>> Stashed changes
export const metadata = {
  charset: "UTF-8",
  name: { viewport: "width=device-width, initial-scale=1",},
  title: "Secret Garden",
  description: "Our new collection of plants delivered to your door",
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body>
        {children}
=======
export default async function RootLayout({ children }) {

  return (
=======
export default async function RootLayout({ children }) {

  return (
>>>>>>> Stashed changes
    <html lang="en" className={leagueSpartan.className}>
      <body className={`font-sans`}>
        <Navigation />
        <CartProvider />
        <main> 
          {children}
        </main>
        <Footer />
>>>>>>> Stashed changes
      </body>
    </html>
  );
}
