'use client'
// React
import React, { useRef, useEffect, useState } from "react";
// NextJS
import { usePathname } from 'next/navigation'
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { createCharFadeInY } from '@/gsap-animations/custom-gsap';

gsap.registerPlugin(useGSAP, ScrollToPlugin, SplitText, ScrollTrigger);

export default function Heading({ title }) {
    const [isHydrated, setIsHydrated] = useState(false);
    const pathname = usePathname();
    const container = useRef();

    useEffect(() => {
        setIsHydrated(true)
    }, []);

    useGSAP(() => {
        if (!isHydrated) return;
        // ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        let splitText = new SplitText(container.current, {
            type: "chars, words"
        });

        setTimeout(() => {
            gsap.from(splitText.words,
                createCharFadeInY(container.current, { stagger: 0.1 })
            );
        }, 0);

        ScrollTrigger.refresh();
        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
    }, { scope: container, dependencies: [isHydrated, pathname] });

    return (
        <div className='border-b-4 border-(--sg-olive) mb-4' ref={container}>
            <h2 className='py-2'>
                {title && (
                    <span>{title}</span>
                )}
            </h2>
        </div>
    )
}
