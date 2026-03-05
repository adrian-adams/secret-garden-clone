'use client'
//React
import React, { useState, useEffect, StrictMode } from 'react';
//NextJS
import Image from "next/image"
// Zustand
import useCartStore from '@/lib/cartStore';
//Component Parts
import ProductInputs from '@/components/products/client/inputs';
import ProductAccordion from '@/components/products/server/accordion';
import ProductImages from '@/components/products/server/images';
// Components
import { Input } from "@/components/ui/input"
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
import SGProductCard from '@/components/custom/sg-product-card';
import SGSelect from '../custom/sg-select';
import SGAccordion, { SGAccordionItem } from '@/components/custom/sg-accordion';
import { Spinner } from "@/components/ui/spinner";
import { Button } from '@/components/ui/button';
import { SelectItem } from '../ui/select';
// Lucide
import { TextAlignStart } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Droplet } from 'lucide-react';
import { Smile } from 'lucide-react';
import { Van } from 'lucide-react';

function PCImage({ image, title }) {
  return (
    <>
      {image && (
        <div className={`relative h-40 sm:h-80 md:h-60`}>
          <Image
            src={image}
            alt={title}
            className={`object-cover`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          // width={100}
          // height={100}
          />
        </div>
      )}
    </>
  )
}

export default function ProductCard({ data }) {
  // Queries
  const id = data.id;
  // const qty = qtyValue;
  const inStock = data.availability;
  const title = data.title;
  const price = data.price;
  const sizes = data.plantSize?.plantSizes?.sizes;
  const colours = data.plantColour?.plantColour?.colours;
  const images = [
    data.thumbnail?.[0]?.url,
    data.thumbnail?.[1]?.url,
    data.thumbnail?.[2]?.url,
  ];
  const info = [
    data.productInfo,
    data.sun,
    data.water,
    data.petFriendly,
    data.deliveryRange,
    data.deliveryTime,
  ];
  console.log("Rendering ProductCard:", id);
  // Zustand
  const cartItems = useCartStore((state) => state.cartItems);
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const emptyCart = useCartStore((state) => state.clearCart);

  const handleAddToCart = () => {
    if (!sizes || !colours) {
      alert("Please select size and colour");
      return;
    }

    addItem({
      id: id,
      title: title,
      price: price,
      sizes: sizes,
      colours: colours,
      // qty: qtyValue,
      image: images[0],
    });
    console.log("Zustand data", cartItems);
  };

  const size = '14';

  // Helper Functions
  // const selectDropdown = (array, message) => {
  //   return array?.length
  //     ? array.map((item) => (
  //       <SelectItem key={item.id} value={item}>
  //         {item}
  //       </SelectItem>
  //     ))
  //     : <p>{message}</p>
  // }

  return (
    <>
      <Drawer direction="right">
        <SGProductCard
          image1={images[0]}
          image2={images[1]}
          title={title}
          price={price}
        />

        {/* Product Card Drawer */}
        <DrawerContent className={`pb-6`}>

          {/* Product Name & Price */}
          <DrawerHeader className={`sticky top-0`}>
            <div className={`flex justify-end`}>
              <DrawerClose asChild>
                <Button variant="sg_secondary">X</Button>
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

            {/* Images */}
            <ProductImages images={images} title={title} />

            {/* Product Information */}
            <div className={`sticky top-0 h-fit flex flex-col gap-4`}>
              <ProductInputs
                sizes={sizes}
                colours={colours}
              // qty={qty}
              />

              {/* Add to Cart */}
              <div className='col-span-2 md:col-span-3'>
                {!inStock ? (
                  <p className={`text-center p-2 text-red-400 font-bold`}>Out of Stock</p>
                ) : (
                  <Button variant="sg_primary" width='full' onClick={handleAddToCart}>
                    ADD TO CART
                  </Button>
                )}
                <Button variant="sg_primary" width='full' onClick={emptyCart}>
                  EMPTY CART
                </Button>
              </div>

              {/* Accordion */}
              <ProductAccordion info={info} size={size} />
            </div>
          </div>
        </DrawerContent>
      </Drawer >
    </>
  )
}
