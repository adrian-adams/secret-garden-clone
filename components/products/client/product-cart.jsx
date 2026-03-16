'use client';
// React
import React, { useState, useRef } from 'react'
// NextJS
import Image from 'next/image';
// Zustand
import useCartStore from '@/lib/cartStore';
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
// Components
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import SGModal from '@/components/custom/sg-modal';
// Lucide
import { CircleX } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Cart() {
    const [openModal, setOpenModal] = useState(false);
    const [checkout, setCheckout] = useState(false);
    const [qtyValue, setQtyValue] = useState(1);
    const [productSize, setProductSize] = useState('');
    const [productColour, setProductColour] = useState('');

    const container = useRef();

    const openCart = useCartStore((state) => state.openCart);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const cartItems = useCartStore((state) => state.cartItems);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateItem = useCartStore((state) => state.updateItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const getTotal = useCartStore((state) => state.getTotal);
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    const cartBG = 'https://eu-west-2.graphassets.com/cmk70usra0h7o07mj3leebcq2/cmmru8sd7t41q07mlqiz36uu2';

    useGSAP(() => {
        gsap.from(container.current, {
            scrollTrigger: {
                trigger: container.current,
                toggleActions: "play pause resume reset",
                top: 'top top'
            },
            stagger: 0.1,
            xPercent: 100,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }, { scope: container });

    return (
        <Drawer direction="right" open={openCart} onOpenChange={toggleCart}>
            <DrawerContent className={`bg-gray-200`}>
                <Image
                    src={cartBG}
                    alt="Secret Garden"
                    // unoptimized
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    className={`object-cover`}
                />
                <div className={`p-4 flex flex-col gap-4 justify-between h-screen z-10`}>
                    <DrawerHeader className={`flex flex-row justify-between items-center gap-2 pb-2 border-b border-black backdrop-blur-sm`}>
                        <DrawerTitle>
                            {cartItems.length > 0 ? (
                                <span className={`sg-font-xlarge flex flex-row items-center justify-center`}>
                                    Cart
                                    <span className={`sg-font-small sg-badge-green `}>
                                        {cartItems.length}
                                    </span>
                                </span>
                            ) : (
                                <span>Cart</span>
                            )}
                        </DrawerTitle>
                        <DrawerClose asChild className={``}>
                            <Button className={` hover:bg-white hover:text-black`} variant="sg_primary" font="sm" size="sm" onClick={!toggleCart}>
                                <CircleX />
                            </Button>
                        </DrawerClose>
                    </DrawerHeader>
                    {cartItems.length === 0 ? (
                        <div className={`sg-font-xlarge flex flex-col justify-center items-center gap-4 py-10`}>
                            <p>No items found.</p>
                        </div>
                    ) : (
                        <div className={`overflow-y-auto scroll-m-3.5`}>
                            <ul className={`space-y-4`} ref={container}>
                                {cartItems.map((items, index) => (
                                    <li key={`${items.id}-${items.size}-${items.colour}-${index}`} className={`grid grid-cols-4 gap-4 p-3 rounded-sm shadow-lg min-h-40 border-2 border-gray-300 backdrop-blur-md`}>
                                        <div className={`relative rounded-sm overflow-hidden col-span-2 md:col-span-1`}>
                                            <Image
                                                src={items.image}
                                                alt={items.title}
                                                // width={200}
                                                // height={200}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className={` object-cover absolute`}
                                            />
                                        </div>
                                        <div className={`flex flex-col justify-between gap-5 col-span-2 md:col-span-3 px-2`}>
                                            <div className={`flex flex-col md:flex-row justify-between gap-3`}>
                                                <h3 className={`text-md md:text-3xl`}>{items.title}</h3>
                                                <p className={`sg-font-medium`}>${(items.price * items.qty).toFixed(2)}</p>
                                            </div>
                                            <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm md:text-lg`}>
                                                <div className={`flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4`}>
                                                    <div className={`flex flex-row items-center gap-1`}>
                                                        <label className={`sg-cart-details`}>Qty:</label>
                                                        <Input
                                                            value={items.qty}
                                                            type="number"
                                                            placeholder="1"
                                                            min="1"
                                                            max="10"
                                                            className={`rounded-4xl w-18 text-black border border-black font-bold`}
                                                            onChange={(e) => updateItem(items.id, items.size, items.colour, Number(e.target.value))}
                                                        />
                                                    </div>
                                                    <p className={`sg-cart-details`}><span>Size:</span> <b>{items.size}</b></p>
                                                    <p className={`sg-cart-details`}><span>Colour:</span> <b>{items.colour}</b></p>
                                                </div>
                                                <Button
                                                    variant="sg_primary"
                                                    width="inline"
                                                    font="md"
                                                    onClick={() => removeItem(items.id, items.size, items.colour)}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <DrawerFooter className={`space-y-4 border-t border-black py-4`}>
                        <div className={`flex flex-row justify-between items-center gap-4`}>

                            {/* Checkout Modal */}
                            <SGModal
                                trigger={
                                    <div>
                                        <Button
                                            variant="sg_primary"
                                            // size="lg"
                                            font="xl"
                                            disabled={cartItems.length === 0}
                                        >Checkout</Button>
                                    </div>
                                }
                                modalTitle="Checkout unavailable"
                                modalText="Checkout not avaialble on demo."
                                open={checkout && cartItems.length > 0}
                                onOpenChange={setCheckout}
                                className={`sg-font-large`}
                            >
                                <Button variant="sg_secondary" font="lg" onClick={() => setCheckout(false)}>
                                    Close
                                </Button>
                            </SGModal>
                            <p className={`font-bold sg-font-medium backdrop-blur-2xl rounded-2xl px-4 leading-relaxed`}>Subtotal: ${subtotal.toFixed(2)}</p>
                        </div>

                        {/* Clear Cart Modal */}
                        <SGModal
                            trigger={
                                <div>
                                    <Button
                                        // className={`pointer-events-none`}
                                        variant="sg_primary"
                                        font="xl"
                                        disabled={cartItems.length === 0}
                                        width="full"
                                        onClick={() => setOpenModal(cartItems.length === 0 ? false : true)}
                                    >
                                        Clear Cart
                                    </Button>
                                </div>
                            }
                            modalTitle="Are you sure?"
                            modalText="Clearing your cart will remove all items."
                            open={openModal && cartItems.length > 0}
                            onOpenChange={setOpenModal}
                            className={`sg-font-large`}
                        >
                            <Button variant="sg_secondary" font="lg" onClick={() => clearCart()}>
                                Clear Cart Items
                            </Button>
                        </SGModal>
                    </DrawerFooter>
                </div>
            </DrawerContent >
        </Drawer >
    )
}
