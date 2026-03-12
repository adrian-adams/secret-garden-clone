'use client'
//React
import React, { useState } from 'react';
//NextJS
import Image from "next/image"
// API
import { fetchHygraph } from "@/api/hygraph";
// GraphQL Queries
import { productQuery } from "@/gql-queries/products";
//Components
import Button from "@/components/custom/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Query for Products
const data = await fetchHygraph(productQuery);
const product = data.products;

const baseStyles = "absolute object-cover transition-all duration-300 ease-out";

export default function ProductCardTest({ image1, image2, title, price }) {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Drawer direction="right">

        <Card className="relative flex gap-6 h-full w-full p-4 bg-(--sg-lightgreen)">
          <div
            className='relative h-75 overflow-hidden rounded-xl cursor-pointer'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {image1 && (
              <Image
                src={image1}
                alt={image1.title}
                className={`${baseStyles} ${hover ? 'opacity-0' : 'opacity-100'}`}
                fill
                sizes="100vw"
              />
            )}

            {image2 && (
              <Image
                src={image2}
                alt={image2.title}
                className={`${baseStyles} ${hover ? 'opacity-100' : 'opacity-0'}`}
                fill
                sizes="100vw"
              />
            )}
          </div>
          <CardHeader className="flex flex-row justify-between items-center flex-2 mt-4 font-medium text-2xl text-black p-0 m-0">
            <CardTitle>
              {title}
            </CardTitle>
            <CardDescription
              className="before:content-['$'] text-black text-2xl">
              {price}
            </CardDescription>
          </CardHeader >
          <CardFooter className="p-0">
            <DrawerTrigger asChild>
              <Button
                variant="secondary"
                width="yes"
                cta="View Details"
                // href={`/shop/products/${slug}`}
                // onClick={() => { }}
                className="py-2"
              />
            </DrawerTrigger>
          </CardFooter>
        </Card >

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerHeader>
          {/* <div className="no-scrollbar overflow-y-auto px-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <p
                key={index}
                className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div> */}
          <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-lg"
          >
            <AccordionItem value="shipping">
              <AccordionTrigger>What are your shipping options?</AccordionTrigger>
              <AccordionContent>
                We offer standard (5-7 days), express (2-3 days), and overnight
                shipping. Free shipping on international orders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                Returns accepted within 30 days. Items must be unused and in original
                packaging. Refunds processed within 5-7 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
              <AccordionContent>
                Reach us via email, live chat, or phone. We respond within 24 hours
                during business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DrawerContent>
      </Drawer>
    </>
  )
}
