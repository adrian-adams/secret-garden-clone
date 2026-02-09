// React
import React from "react";
// Next JS
import Image from "next/image";
// API
import { fetchHygraph } from "@/api/hygraph";
// GraphQL Queries
import { header } from "@/gql-queries/header";
import { productQuery } from "@/gql-queries/products";
import { teaserQuery } from "@/gql-queries/teaser";
import { testProductsQuery } from "@/gql-queries/tests";
// Components
import Button from "@/components/custom/button";
import Hero from "@/components/layout/hero";
import CarouselSlider from "@/components/layout/carousel";
 import ProductList from "@/components/products/product-list";
import Heading from "@/components/layout/heading";
import Teaser from "@/components/layout/teaser";
import StoreLocator from "@/components/store-locator/store-locator";


export default async function Home() {
// Test Query
const data = await fetchHygraph(testProductsQuery);
// Query for Header
const headerData = await fetchHygraph(header);
// Query for Products
const productData = await fetchHygraph(productQuery);
const dataProduct = productData.products;
// Query for Teaser
const teaserData = await fetchHygraph(teaserQuery);
const dataTeaser = teaserData.teasers;

return (
  
  <main className="flex flex-col gap-14 pb-20">

    <Hero 
      bg_desktop={headerData.headers?.[0]?.desktop?.[0]?.url}
      bg_mobile={headerData.headers?.[0]?.mobile?.url}
      alt="Secret Garden"
      heading="New Arrivals" 
      text="Our new collection of plants delivered to your door" 
    >
      <Button title="Shop Now" link="/shop" cta="Shop Now" target="_self" variant="primary" width="no" />
    </Hero>

    
    <section >
      <Heading title="About Us" />
      <div className="md:w-9/12 mx-auto flex flex-col md:flex-row justify-center gap-5 md:gap-8">
        <p className="flex-6/12 text-lg md:text-3xl">
          We are a small plant store with three locations in NYC. Come shop at any of our locations or order plants from the comfort of your couch. labore et dolor magna aliqua. Ut enim ad minim velit, quis nostrud exercitation porttitor.
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Tristique nulla aliquet enim tortor at auctor urna mauris commodo.
        </p>
      </div>
      
    </section>

    <section className="w-full mx-auto">
      <CarouselSlider />
    </section>
    
    <section >
      <Heading title="Shop Bundles" />
      <div className="w-full max-w-285 mx-auto">
        <ProductList queryResults={dataProduct} tags={"home"} />
      </div>
    </section>

    <section>
      <Heading title="We have an app!" />
      <Teaser 
        variant='primary'
        image={dataTeaser?.[0]?.teaserImage?.url}
        imageBG={dataTeaser?.[0]?.teaserBackground?.url}
        imageDecor={dataTeaser?.[0]?.teaserDecoration?.url}
        preText={dataTeaser?.[0]?.preText}
        title={dataTeaser?.[0]?.title}
        buttonText={dataTeaser?.[0]?.buttonText}
        link={dataTeaser?.[0]?.link}
        tab={dataTeaser?.[0]?.newTab}
      />
    </section>

    <section className={`w-full px-0`}>
      <StoreLocator />
    </section>
    
  </main>

  );
}
