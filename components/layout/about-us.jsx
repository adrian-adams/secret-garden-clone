'use client'
// React
import React, { useRef, useEffectLayout } from 'react'
// NextJS
import { usePathname } from 'next/navigation';
// Components
import Heading from '@/components/layout/heading';
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function AboutUS() {
    const container = useRef();
    const pathname = usePathname();

    useGSAP(() => {
        gsap.from(".gsap-au-text", {
            scrollTrigger: {
                trigger: ".gsap-au-text",
                toggleActions: "restart none none none",
                start: "top bottom",
                end: "bottom top",
                // markers: true
            },
            y: 100,
            opacity: 0.5,
            duration: 0.75
        })

        // gsap.from("#gsap-au-text", {
        //     scrollTrigger: {
        //         trigger: "#gsap-au-text",
        //         toggleActions: "restart none none none",
        //         start: "top bottom",
        //         end: "bottom top",
        //         // markers: true
        //     },
        //     y: 100,
        //     opacity: 1,
        //     duration: 0.75
        // })
    }, { scope: container, dependencies: [pathname] });

    return (
        <div ref={container}>
            <Heading title="About Us" className="gsap-au-text" />
            <p className="gsap-au-text text-md md:text-2xl">
                We are a small plant store with three locations in NYC. Come shop at any of our locations or order plants from the comfort of your couch. labore et dolor magna aliqua. Ut enim ad minim velit, quis nostrud exercitation porttitor.
            </p>
            <br />
            <p className="gsap-au-text text-md md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Tristique nulla aliquet enim tortor at auctor urna mauris commodo.
            </p>
        </div>
    )
}
