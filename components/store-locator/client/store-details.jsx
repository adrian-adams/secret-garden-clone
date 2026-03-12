'use client'
import React from 'react'
// NextJS
import Image from 'next/image';
import Link from 'next/link';
// Components
import HoverLink from '@/components/custom/sg-link';
import { Button } from '@/components/ui/button'

export function StoreContact({ store }) {
    return (
        <div className={`sg-font-medium leading-snug text-center lg:text-start`}>
            <p>Address: {store.address}</p>
            <p>Phone:
                <HoverLink>
                    <a
                        href={`tel:${store.phone}`}>
                        {store.phone}
                    </a>
                </HoverLink>
            </p>
            <p>Email:
                <HoverLink>
                    <a
                        href={`mailto:${store.email}`}>
                        {store.email}
                    </a>
                </HoverLink>
            </p>
        </div>
    )
}

export function StoreButtons({ store }) {
    return (
        <div className={`flex flex-wrap gap-4 mt-4`}>
            {store.directions?.latitude && store.directions?.longitude && (
                <Link href={`https://www.google.com/maps/dir/?api=1&destination=${store.directions.latitude},${store.directions.longitude}`} target="_blank">
                    <Button variant="sg_primary" width="no">
                        Directions
                    </Button>
                </Link>
            )}
            <Link href="/shop">
                <Button variant="sg_primary" width="no">
                    View Shop
                </Button>
            </Link>
        </div>
    )
}

export default function StoreDeatils({ store }) {
    return (
        <div className={`flex flex-col justify-center items-center lg:items-start gap-2 border-b-2 border-black py-6 lg:border-b-0 lg:py-0 text-black`}>
            <StoreContact store={store} />
            <StoreButtons store={store} />
        </div>
    )
}
