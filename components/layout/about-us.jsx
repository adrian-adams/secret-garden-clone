'use client'
// React
import React, { useState, useRef, useEffect } from 'react'
// NextJS
import { usePathname } from 'next/navigation';
// Components
import Heading from '@/components/layout/heading';
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createFadeInScroll } from '@/gsap-animations/custom-gsap';
gsap.registerPlugin(ScrollTrigger);

export default function AboutUS() {
    const container = useRef();
    const pathname = usePathname();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useGSAP(() => {

        if (!isHydrated) return;

        // gsap.from(container.current, createFadeInScroll('.gsap-au-text', { y: 100 }));

        gsap.fromTo(container.current,
            createFadeInScroll('.gsap-au-text', { y: 100, opacity: 0 }),
            createFadeInScroll('.gsap-au-text', { y: 0, opacity: 1 }),
        );

    }, { scope: container, dependencies: [pathname, isHydrated] });

    return (
        <>
            <Heading title="About Us" />
            <div ref={container}>
                <p className="sg-font-medium gsap-au-text">
                    We are a small plant store with three locations in NYC. Come shop at any of our locations or order plants from the comfort of your couch. labore et dolor magna aliqua. Ut enim ad minim velit, quis nostrud exercitation porttitor.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Tristique nulla aliquet enim tortor at auctor urna mauris commodo.
                </p>
            </div>
        </>
    )
}
