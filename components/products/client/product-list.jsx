'use client'
// React
import React, { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createFadeInScrollY } from "@/gsap-animations/custom-gsap";
//Components
import ProductCard from "@/components/products/client/product-card";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProductListClient({ tags, mapData }) {
    const productFilter = tags ?
        mapData.filter((item) => item.tags?.includes(tags)) :
        mapData;

    const container = useRef();

    useGSAP(() => {
        gsap.from(`.gsap-card`, createFadeInScrollY(container.current, 'bottom', { stagger: 0.1 }))
    }, { scope: container })

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
