'use client';
import { useEffect, useState } from 'react';
import Cart from '@/components/products/client/product-cart';

export default function CartProvider() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    // Only render Cart after hydration completes
    return isHydrated ? <Cart /> : null;
}