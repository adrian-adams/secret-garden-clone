'use client';
// React
import React, { useState } from 'react';
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

export default function ProductDrawer({ data }) {
    // Queries
    const title = data.title;
    const price = data.price;

    return (
        <>
            {/* Header */}
            <DrawerHeader className={`sticky top-0`}>
                <div className={`flex justify-end`}>
                    <DrawerClose asChild>
                        <Button variant="sg_secondary" font="sm" size="sm">X</Button>
                    </DrawerClose>
                </div>
                <div>
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
