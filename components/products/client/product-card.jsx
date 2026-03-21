'use client';
// React
import React, { useState, useRef } from 'react'
// NextJS
import Image from 'next/image'
// Components
import ProductDrawer from '@/components/products/client/product-drawer';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function ProductCard({ data }) {
    const [hover, setHover] = useState(false);

    const id = data.id;
    const title = data.title;
    const price = data.price;
    const images = [
        data.thumbnail?.[0]?.url,
        data.thumbnail?.[1]?.url,
        data.thumbnail?.[2]?.url,
    ];

    const baseStyles = "absolute object-cover transition-all duration-300 ease-out";


    return (
        <Drawer direction="right">
            <Card className="relative flex gap-6 h-full w-full p-4 bg-(--sg-lightgreen)">
                <div
                    className='relative h-75 overflow-hidden rounded-xl cursor-pointer'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {images[0] && (
                        <Image
                            src={images[0]}
                            alt={title}
                            className={`${baseStyles} ${hover ? 'opacity-0' : 'opacity-100'}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    )}

                    {images[1] && (
                        <Image
                            src={images[1]}
                            alt={title}
                            className={`${baseStyles} ${hover ? 'opacity-100' : 'opacity-0'}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
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
                        <Button variant="sg_secondary" width='full'>
                            View Details
                        </Button>
                    </DrawerTrigger>
                </CardFooter>
            </Card >
            <DrawerContent className={`pb-6`}>
                <DrawerDescription className="sr-only">Product details drawer</DrawerDescription>
                <ProductDrawer data={data} />
            </DrawerContent>
        </Drawer>
    )
}
