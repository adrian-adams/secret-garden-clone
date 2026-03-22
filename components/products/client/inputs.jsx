'use client';
// React
import React, { useState, useEffect } from 'react';
// Zustand
import useCartStore from '@/lib/cartStore';
// Components
import { Input } from "@/components/ui/input"
import SGSelect from '@/components/custom/sg-select';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export default function ProductInputs({ data }) {
    const [qtyValue, setQtyValue] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productColour, setProductColour] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

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

    useEffect(() => {
        if (!isLoading && success) {
            setTimeout(() => {
                setSuccess(false);
            }, 2000);
        }
    }, [isLoading, success]);

    const handleAddToCart = () => {
        if (!productSize || !productColour) {
            alert("Please select size and colour");
            return;
        }

        try {
            setIsLoading(true);

            addItem({
                id: id,
                title: title,
                price: price,
                size: productSize,
                colour: productColour,
                qty: qtyValue,
                image: images[0],
            });

        } catch (error) {

            setIsLoading(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);

            console.error('Error adding to cart:', error);

        } finally {
            setTimeout(() => {
                setIsLoading(false);
                setSuccess(true);
            }, 1000);

            console.log("Added to cart:", useCartStore.getState().cartItems);
        };
    }

    // const handleEmptyCart = () => {
    //     emptyCart();
    //     console.log("Cart emptied:", useCartStore.getState().cartItems);
    // }

    return (
        <div>
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 backdrop-blur-lg p-2 rounded-lg`}>
                {/* Quantity */}
                <div className={`flex flex-col gap-1`}>
                    <label className='font-bold'>Qty</label>
                    <Input
                        value={qtyValue}
                        type="number"
                        placeholder="1"
                        min='1'
                        max="11"
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

            {qtyValue > 10 ? (
                <div className={`flex flex-col gap-2 text-sm pt-2 text-center text-pretty`}>
                    <p>Order quantities over 10 can be placed through our Head Office:</p>
                    <a href="mailto:secret_garden@gmail.com" className={`hover:underline active:underline`}>secret_garden@gmail.com</a>
                    <a href="tel:021-4567890" className={`hover:underline active:underline`}>021-4567890</a>
                </div>
            ) : (
                ''
            )}

            {/* Add to Cart CTA */}
            <div className='col-span-2 md:col-span-3 pt-4'>
                {!inStock ? (
                    <p className={`text-center p-2 text-red-400 font-bold`}>Out of Stock</p>
                ) : (
                    <Button
                        className={`uppercase ${qtyValue > 10 ? 'opacity-50 pointer-events-none' : ''}`}
                        variant="sg_primary"
                        width='full'
                        size="sm"
                        font="small"
                        onClick={handleAddToCart}
                    >
                        {isLoading ? (
                            <span className={`flex flex-row items-center justify-center gap-4`}>
                                <span>adding to cart...</span>
                                <Spinner className={`size-7`} />
                            </span>
                        ) : (
                            <span>add to cart</span>
                        )}
                    </Button>
                )}
                <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${success || error ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {success && (
                        <p className={`sg-font-medium text-center font-semibold pt-4 leading-snug`}>Your cart has been updated!</p>
                    )}
                    {error && (
                        <p className={`sg-font-medium text-center pt-4 text-red-800`}>Cart update failed, please try again.</p>
                    )}
                </div>
            </div>
        </div>
    )

}
