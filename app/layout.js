import "./globals.css";
// Nextjs
import Script from "next/script";
// Fonts
import { Geist, Geist_Mono } from "next/font/google";
import { League_Spartan } from "next/font/google";
// API
import { fetchHygraph } from "@/api/hygraph";
// Vercel
import { Analytics } from "@vercel/analytics/next"
// GraphQL Queries
import { logoQuery } from "@/gql-queries/logo";
// Components
import NavigationMenu from "@/components/navigation/server/navigation";
import CartProvider from '@/components/products/client/cart-provider';
import Footer from "@/components/footer/server/footer";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
})

// Metadata
export const metadata = {
  charset: "UTF-8",
  name: { viewport: "width=device-width, initial-scale=1",},
  title: "Secret Garden",
  description: "Our new collection of plants delivered to your door",
  icons: {
    icon: 'https://eu-west-2.graphassets.com/cmk70usra0h7o07mj3leebcq2/cmmv4y8rmzdfm07lc54hm0fcy'
  }
};

export default async function RootLayout({ children }) {
  const data = await fetchHygraph(logoQuery);
  const logoImg = data.brandLogos?.[0]?.logo.url;

  return (
    <html lang="en" className={leagueSpartan.className}>
      <head>
         <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script 
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `
            }}
        />
      </head>
      <body className={`font-sans`}>
        <Analytics />
        <NavigationMenu />
        <CartProvider />
        <main> 
          {children}
        </main>
        <Footer />

       
      </body>
    </html>
  )
}
