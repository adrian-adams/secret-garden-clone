'use client'
// React
import React, { useRef, useEffect, useState } from 'react';
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
    // const refreshCount = Date.now();
    // console.log("Page refresh: ", refreshCount);
    // const [counter, setCounter] = useState(1);
    const pathname = usePathname();
    const container = useRef();

    // useEffect(() => {
    //     setCounter(counter + 1);
    //     console.log("counter: ", pathname + " " + counter);
    // }, [pathname]);

    useGSAP(() => {
        // ScrollTrigger.getAll().forEach(trigger => {
        //     trigger.kill();
        // });

        let splitText = new SplitText(container.current, {
            type: "chars, words"
        });

        setTimeout(() => {
            gsap.from(splitText.words,
                createCharFadeInY(container.current)
            );
            ScrollTrigger.refresh();
        }, 50);

        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // }

    }, [pathname]);

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
