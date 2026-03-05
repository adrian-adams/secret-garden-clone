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
import {Button} from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/layout/hero";
import CarouselSlider from "@/components/layout/carousel";
import ProductList from "@/components/products/server/product-list";
import AboutUs from "@/components/layout/about-us";
import Heading from "@/components/layout/heading";
import Teaser from "@/components/layout/teaser";
import StoreLocator from "@/components/store-locator/server/store-locator";

export default async function Home() {
// Test Query
const data = await fetchHygraph(testProductsQuery);
// Query for Header
const headerData = await fetchHygraph(header);
// Query for Teaser
const teaserData = await fetchHygraph(teaserQuery);
const dataTeaser = teaserData.teasers;

return (
  <>
    <Hero 
      bg_desktop={headerData.headers?.[0]?.desktop.url}
      bg_mobile={headerData.headers?.[0]?.mobile.url}
      alt="Secret Garden"
      heading="New Arrivals" 
      text="Our new collection of plants delivered to your door" 
    >
      <div>
        <Button variant="sg_primary" width='no'>
          Shop Now
        </Button>
      </div>
    </Hero>

    <section>
      <AboutUs />
    </section>

    <section className="w-full mx-auto">
      <CarouselSlider />
    </section>
    
    <section>
      <Heading title="Shop Bundles" />
      <div className="w-full max-w-285 mx-auto">
        <ProductList tags={"home"} />
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
    <Separator size="sm" />
    <section className={`w-full px-0`}>
      <StoreLocator />
      <br></br>
      
    </section>
    <Separator size="sm" />
  </>
  )
}
