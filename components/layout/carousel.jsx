import * as React from "react"
import { fetchHygraph } from "@/api/hygraph";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const buttonStyles = "bg-(--sg-olive) hover:bg-(--sg-green) active:bg-(--sg-olive) border-6 border-white p-5 md:p-8 hover:fill-white top-8/12 md:top-1/2 cursor-pointer";
const xAxis = 5.5;

// GraphQL query to fetch carousel data
const carouselQuery = `query CarouselQuery {
  carousels {
    id
    carousel {
      ... on Slider {
        id
        slider {
          fileName
          height
          id
          size
          url(transformation: {image: {quality: {value: 100}}})
          width
        }
      }
    }
  }
}`

export default async function CarouselSlider() {
  const data = await fetchHygraph(carouselQuery);
  const images = data.carousels?.[0]?.carousel?.[0]?.slider ?? [];
  // const imageQuality = data.carousels?.[0]?.carousel?.[0]?.slider?.[0]?.url?.transformation?.[0]?.image?.quality?.value ?? 100;

  if (!images.length) return null;

  return (
    <Carousel className="relative px-6 md:px-20" opts={{ loop: true, }}>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div>
              {/* <Card> */}
              <CardContent className="relative h-50 md:h-140">
                <Image
                  src={image.url}
                  alt={"Secret Garden"}
                  fill
                  sizes="100vw"
                  // unoptimized
                  quality={75}
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
      <CarouselPrevious className={`${buttonStyles} left-0 md:left-11 -translate-y-1/2`} />
      <CarouselNext className={`${buttonStyles} right-0 md:right-11 -translate-y-1/2`} />
    </Carousel>
  )
}
