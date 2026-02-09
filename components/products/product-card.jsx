'use client'
//React
import React, { useState } from 'react';
//NextJS
import Image from "next/image"
//Components
import Button from "@/components/custom/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const baseStyles = "absolute object-cover transition-all duration-300 ease-out";

export default function ProductCard({ title, price, image1, image2, slug }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Card className="relative flex gap-6 h-full w-full p-4 bg-(--sg-lightgreen)">
        <div
          className='relative h-75 overflow-hidden rounded-xl cursor-pointer'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {image1 && (
            <Image
              src={image1}
              alt={title}
              className={`${baseStyles} ${hover ? 'opacity-0' : 'opacity-100'}`}
              fill
              sizes="100vw"
            />
          )}

          {image2 && (
            <Image
              src={image2}
              alt={title}
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
          <Button
            variant="secondary"
            width="yes"
            cta="View Details"
            href={`/shop/products/${slug}`}
            className="py-2"
          />
        </CardFooter>

      </Card >
    </>
  )
}
