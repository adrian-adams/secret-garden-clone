import Image from "next/image";
import { fetchHygraph } from "@/api/hygraph";
import { testProductsQuery } from "@/gql-queries/tests";
import { header } from "@/gql-queries/header";
import React from "react";
import Button from "@/components/custom/button";
import Hero from "@/components/layout/hero";
import ProductCard from "@/components/testing/productcard";
import CarouselSlider from "@/components/layout/carousel";
import { headers } from "next/headers";


export default async function Home() {
const data = await fetchHygraph(testProductsQuery);
const headerData = await fetchHygraph(header);

return (
  
  <main className="flex flex-col gap-14">

    <Hero 
      bg_desktop={headerData.headers?.[0]?.desktop?.[0]?.url}
      bg_mobile={headerData.headers?.[0]?.mobile?.url}
      alt="Secret Garden"
      heading="New Arrivals" 
      text="Our new collection of plants delivered to your door" 
    >
      <Button title="Shop Now" link="/shop" cta="Shop Now" target="_self" variant="primary" />
    </Hero>

    <section className="md:w-9/12 mx-auto flex flex-col md:flex-row justify-center gap-5 md:gap-8">
      <h2 className="uppercase flex-6/12">
        about us
      </h2>
      <p className="flex-6/12">
        We are a small plant store with three locations in NYC. Come shop at any of our locations or order plants from the comfort of your couch. labore et dolor magna aliqua. Ut enim ad minim velit, quis nostrud exercitation porttitor.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Tristique nulla aliquet enim tortor at auctor urna mauris commodo.
      </p>
    </section>

    <section className="w-full mx-auto">
      <CarouselSlider />
    </section>

    <section>
       <ProductCard />
    </section>
    
  </main>
  );
}
