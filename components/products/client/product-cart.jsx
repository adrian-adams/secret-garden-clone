'use client';
// React
import React from 'react'
// NextJS
import Image from 'next/image';
// Zustand
import useCartStore from '@/lib/cartStore';
// Components
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Spinner } from "@/components/ui/spinner";
import { Button } from '@/components/ui/button';
import ProductInputs from '@/components/products/client/inputs';
import { Input } from "@/components/ui/input"

export default function Cart() {
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

    return (
        <Drawer direction="right" open={openCart} onOpenChange={toggleCart}>
            <DrawerContent>
                <div className={`p-4 flex flex-col gap-4 justify-between h-screen`}>
                    <DrawerHeader className={`flex flex-row justify-between items-center gap-2 pb-2 border-b border-black`}>
                        <DrawerTitle>Cart</DrawerTitle>
                        <DrawerClose asChild>
                            <Button variant="sg_drawer_close" width="inline" font="sm" size="sm" onClick={!toggleCart}>X</Button>
                        </DrawerClose>
                    </DrawerHeader>
                    {cartItems.length === 0 ? (
                        <div className={`flex flex-col justify-center items-center gap-4 py-10`}>
                            <p>No items found.</p>
                        </div>
                    ) : (
                        <div className={`overflow-y-auto scroll-m-3.5`}>
                            <ul className={`space-y-4 `}>
                                {cartItems.map((items, index) => (
                                    <li key={`${items.id}-${items.size}-${items.colour}-${index}`} className={`grid grid-cols-4 gap-4 p-3 rounded-sm bg-(--sg-olive) shadow-md min-h-50`}>
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
                                                <p>${(items.price * items.qty).toFixed(2)}</p>
                                            </div>
                                            <div className={`flex flex-col md:flex-row items-start justify-between gap-6 text-sm md:text-lg`}>
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
                                                    font="sm"
                                                    size="sm"
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
                    <DrawerFooter className={`space-y-4 border-t border-black pt-4`}>
                        <div className={`flex flex-row justify-between items-center gap-4`}>
                            <div>
                                <Button variant="sg_primary" >Checkout</Button>
                            </div>
                            <p className={`font-bold text-lg md:text-3xl`}>Subtotal: ${subtotal.toFixed(2)}</p>
                        </div>
                        <div>
                            <Button variant="sg_secondary" width="full" onClick={() => clearCart()}>Clear Cart</Button>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
