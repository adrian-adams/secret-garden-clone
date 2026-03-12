// React
import * as React from "react"
// NextJS
import Image from "next/image";
// API
import { fetchHygraph } from "@/api/hygraph";
// GrapghQL Query
import { carouselQuery } from "@/gql-queries/carousel"
// Components
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default async function CarouselSlider() {
  const data = await fetchHygraph(carouselQuery);
  const images = data.carousels?.[0]?.carousel?.[0]?.slider ?? [];
  const buttonStyles = "bg-(--sg-olive) hover:bg-(--sg-green) active:bg-(--sg-olive) border-6 border-white p-5 md:p-8 hover:fill-white top-8/12 md:top-1/2 cursor-pointer";

  if (!images.length) return null;

  return (
    <Carousel className="relative px-6 md:px-20" opts={{ loop: true, }}>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div>
              {/* <Card> */}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
              <CardContent className="relative h-50 md:h-140">
=======
              <CardContent className="relative h-50 md:h-120">
>>>>>>> Stashed changes
=======
              <CardContent className="relative h-50 md:h-120">
>>>>>>> Stashed changes
                <Image
                  src={image.url}
                  alt={"Secret Garden"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                  // quality={100}
                  // width={500}
                  // height={300}
                  className="object-cover"
                />
              </CardContent>
              {/* </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={`gsap-prev ${buttonStyles} left-0 md:left-11 -translate-y-1/2`} />
      <CarouselNext className={`gsap-next ${buttonStyles} right-0 md:right-11 -translate-y-1/2`} />
    </Carousel>
  )
}
