'use client'
// React
import React from 'react'
// NextJS
import { usePathname } from 'next/navigation'
// Components
import FooterGallery from './footer-gallery'

export default function FooterGalleryProvider() {
    const pathname = usePathname();
    return (
        <>
            <FooterGallery key={pathname} />
        </>
    )
}