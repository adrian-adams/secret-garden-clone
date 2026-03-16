'use client';
// React
import React, { useState } from 'react';
// NextJS
import Image from 'next/image';
// Zustand
import useCartStore from '@/lib/cartStore';
//Component Parts
import ProductInputs from '@/components/products/client/inputs';
import ProductAccordion from '@/components/products/server/accordion';
import ProductImages from '@/components/products/server/images';
// Components
import {
    DrawerClose,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
// Lucide
import { CircleX } from 'lucide-react';

export default function ProductDrawer({ data }) {
    // Queries
    const title = data.title;
    const price = data.price;

    const imgBG = 'https://eu-west-2.graphassets.com/cmk70usra0h7o07mj3leebcq2/cmms2ir6h286v07l9awl95kab';

    return (
        <>
            <Image
                src={imgBG}
                alt="Secret Garden"
                // unoptimized
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                className={`object-cover`}
            />
            {/* Header */}
            <DrawerHeader className={`sticky top-0 h-fit`}>
                <div className={`flex justify-end`}>
                    <DrawerClose asChild>
                        <Button variant="sg_primary" width="no" font="sm" size="sm">
                            <CircleX />
                        </Button>
                    </DrawerClose>
                </div>
                <div className={`backdrop-blur-xl p-2 rounded-md`}>
                    <DrawerTitle className={`flex flex-row justify-between text-2xl pb-1 border-b border-black`}>
                        {title}
                        <span className="before:content-['$'] text-black text-2xl">{price}</span>
                    </DrawerTitle>
                </div>
            </DrawerHeader>
            <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 no-scrollbar overflow-y-auto px-4`}>
                {/* Left-Hand Dide Images */}
                <ProductImages data={data} />
                {/* Right-Hand Side Info */}
                <div className={`sg-font-small sticky top-0 h-fit flex flex-col gap-4`}>
                    {/* Inputs */}
                    <ProductInputs data={data} />
                    {/* Accordion */}
                    <ProductAccordion data={data} />
                </div>
            </div>
        </>
    )
}
