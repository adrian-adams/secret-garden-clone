'use client'
// React
import React, { useRef } from "react";
// NextJS
import { usePathname } from 'next/navigation'
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createFadeInScroll } from "@/gsap-animations/custom-gsap";
//Components
import ProductCard from "@/components/products/client/product-card";

gsap.registerPlugin(useGSAP);

export default function ProductListClient({ tags, mapData }) {
    const productFilter = tags ?
        mapData.filter((item) => item.tags?.includes(tags)) :
        mapData;

    const container = useRef();
    const pathname = usePathname();

    useGSAP(() => {
        gsap.from('.gsap-card', createFadeInScroll('.gsap-card', { y: 40, stagger: 0.1 }))
    }, { scope: container, dependencies: [pathname] });

    return (
        <>
            {productFilter?.length > 0 &&
                <ul ref={container} className="sg-grid">
                    {productFilter.map((item) => (
                        <li key={item.id} className={`gsap-card`}>
                            <ProductCard data={item} />
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}
