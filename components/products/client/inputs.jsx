'use client';
// React
import React, { useState } from 'react';
// Zustand
import useCartStore from '@/lib/cartStore';
// Components
import { Input } from "@/components/ui/input"
import SGSelect from '@/components/custom/sg-select';
import { Button } from '@/components/ui/button';

export default function ProductInputs({ data }) {
    const [qtyValue, setQtyValue] = useState(1);
    const [productSize, setProductSize] = useState('');
    const [productColour, setProductColour] = useState('');

    // Zustand
    const cartItems = useCartStore((state) => state.cartItems);
    const addItem = useCartStore((state) => state.addItem);
    const emptyCart = useCartStore((state) => state.clearCart);

    const id = data.id;
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

    const handleAddToCart = () => {
        if (!productSize || !productColour) {
            alert("Please select size and colour");
            return;
        }

        addItem({
            id: id,
            title: title,
            price: price,
            size: productSize,
            colour: productColour,
            qty: qtyValue,
            image: images[0],
        });

        console.log("Added to cart:", useCartStore.getState().cartItems);
    };

    const handleEmptyCart = () => {
        emptyCart();
        console.log("Cart emptied:", useCartStore.getState().cartItems);
    }

    return (
        <div>
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3`}>
                {/* Quantity */}
                <div className={`flex flex-col gap-1`}>
                    <label>Qty</label>
                    <Input
                        value={qtyValue}
                        type="number"
                        placeholder="1"
                        min={1}
                        max="10"
                        className={`rounded-4xl w-full md:max-w-40 text-black`}
                        onChange={(e) => setQtyValue(Number(e.target.value))}
                    />
                </div>
                {/* Size */}
                <SGSelect
                    label="Size"
                    placeholder="Select"
                    array={sizes}
                    message={"Not available"}
                    value={productSize}
                    onChange={setProductSize}
                />
                {/* Colour */}
                <SGSelect
                    label="Colour"
                    placeholder="Select"
                    array={colours}
                    message={"Not available"}
                    value={productColour}
                    onChange={setProductColour}
                />
            </div>
            {/* Add to Cart CTA */}
            <div className='col-span-2 md:col-span-3 pt-4'>
                {!inStock ? (
                    <p className={`text-center p-2 text-red-400 font-bold`}>Out of Stock</p>
                ) : (
                    <Button variant="sg_primary" width='full' onClick={handleAddToCart}>
                        ADD TO CART
                    </Button>
                )}
                {/* <Button variant="sg_primary" width='full' onClick={handleEmptyCart}>
                    EMPTY CART
                </Button> */}
            </div>
        </div>

    )
}
