'use client';
// React
import React, { useState } from 'react'
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
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import SGModal from '@/components/custom/sg-modal'

export default function Cart() {
    const [openModal, setOpenModal] = useState(false);
    const [checkout, setCheckout] = useState(false);
    const [qtyValue, setQtyValue] = useState(1);
    const [productSize, setProductSize] = useState('');
    const [productColour, setProductColour] = useState('');

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
            <DrawerContent className={``}>
                <div className={`backdrop-blur-xl p-4 flex flex-col gap-4 justify-between h-screen`}>
                    <DrawerHeader className={`flex flex-row justify-between items-center gap-2 pb-2 border-b border-black`}>
                        <DrawerTitle>
                            {cartItems.length > 0 ? (
                                <span className={`flex flex-row items-center justify-center`}>
                                    Cart
                                    <span className={`sg-font-small my-auto bg-green-950 text-white px-2.5 py-0.5 ms-2 rounded-full`}>
                                        {cartItems.length}
                                    </span>
                                </span>
                            ) : (
                                <span>Cart</span>
                            )}
                        </DrawerTitle>
                        <DrawerClose asChild>
                            <Button className={`bg-white`} variant="sg_drawer_close" width="inline" font="sm" size="sm" onClick={!toggleCart}>X</Button>
                        </DrawerClose>
                    </DrawerHeader>
                    {cartItems.length === 0 ? (
                        <div className={`sg-font-xlarge flex flex-col justify-center items-center gap-4 py-10`}>
                            <p>No items found.</p>
                        </div>
                    ) : (
                        <div className={`overflow-y-auto scroll-m-3.5`}>
                            <ul className={`space-y-4`}>
                                {cartItems.map((items, index) => (
                                    <li key={`${items.id}-${items.size}-${items.colour}-${index}`} className={`bg-white grid grid-cols-4 gap-4 p-3 rounded-sm bg-cover shadow-lg min-h-40`}>
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
                            <p className={`font-bold sg-font-medium`}>Subtotal: ${subtotal.toFixed(2)}</p>
                        </div>
                        <SGModal
                            trigger={
                                <div>
                                    <Button
                                        // className={`pointer-events-none`}
                                        variant="sg_secondary"
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
                                Clear Carts
                            </Button>
                        </SGModal>
                    </DrawerFooter>
                </div>
            </DrawerContent >
        </Drawer >
    )
}
