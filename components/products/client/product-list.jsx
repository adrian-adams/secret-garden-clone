'use client'
// React
import React, { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
//Components
import ProductCard from "@/components/products/client/product-card";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProductListClient({ tags, mapData }) {
    const productFilter = tags ?
        mapData.filter((item) => item.tags?.includes(tags)) :
        mapData;

    const container = useRef();

    useGSAP(() => {
        gsap.from(".gsap-card", {
            scrollTrigger: {
                trigger: container.current,
                toggleActions: "play pause resume reset",
                // start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
        })
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
