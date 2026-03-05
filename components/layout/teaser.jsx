'use client'
import React, { useRef } from 'react'
import Image from "next/image"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollToPlugin, SplitText, ScrollTrigger);

const widthStyles = 'w-50 md:w-8/12'

export default function Teaser({ image, imageBG, imageDecor, preText, title, buttonText, link, tab, variant = 'primary' }) {
    const container = useRef(null);
    const titleRef = useRef(null);
    const pretextRef = useRef(null);
    const btnRef = useRef(null);
    const leafTrRef = useRef(null);
    const leafBlRef = useRef(null);
    const phoneRef = useRef(null);

    const teaserStyles = {
        primary: 'flex flex-col md:flex-row gap-12 md:gap-6 items-center',
        secondary: 'flex flex-col md:flex-row-reverse gap-5 md:gap-8 items-center',
        third: 'flex flex-col gap-5 md:gap-8',
    }
    const appliedVariant = teaserStyles[variant] ?? teaserStyles.primary;

    useGSAP(() => {
        // SplitText
        let splitText = new SplitText(titleRef.current, {
            type: "chars, words"
        });

        gsap.from(splitText.chars, {
            scrollTrigger: {
                trigger: titleRef.current,
                toggleActions: "play pause resume reset"
            },
            opacity: 0,
            x: 20,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out'
        });

        // PreText
        gsap.from(pretextRef.current, {
            scrollTrigger: {
                trigger: pretextRef.current,
                toggleActions: "play pause resume reset"
            },
            opacity: 0,
            y: -40,
            duration: 0.9,
            ease: 'power2.out'
        });

        // Button
        gsap.from(btnRef.current, {
            scrollTrigger: {
                trigger: btnRef.current,
                toggleActions: "play pause resume reset"
            },
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: 'power2.out'
        });

        // Leaf Top Right
        gsap.to(leafTrRef.current, {
            scrollTrigger: {
                trigger: leafTrRef.current,
                toggleActions: "play pause resume reset",
                scrub: true
            },
            y: -80,
            x: 120,
            duration: 3,
            ease: 'power2.out'
        });

        // Leaf Bottom Left
        gsap.to(leafBlRef.current, {
            scrollTrigger: {
                trigger: leafBlRef.current,
                toggleActions: "play pause resume reset",
                scrub: true
            },
            y: 90,
            x: -30,
            duration: 3,
            ease: 'power2.out'
        });

        // Phone
        gsap.to(phoneRef.current, {
            scrollTrigger: {
                trigger: phoneRef.current,
                toggleActions: "play pause resume reset",
                scrub: true
            },
            scale: 1.3,
            duration: 0.9,
            ease: 'power2.out'
        });

        // Cleanup
        return () => {
            splitText.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, { scope: container });

    return (
        <div className={`${appliedVariant} relative pt-20 overflow-hidden md:overflow-visible`} ref={container}>
            <div className='relative flex-1/2'>
                <div className={`gsap-teaser relative w-65 md:w-8/12 h-100 mx-auto`}>
                    {image && (
                        <Image
                            ref={phoneRef}
                            src={image}
                            alt={title}
                            fill
                            sizes='(max-width: 768px) 50vw, (max-wdith: 1200px) 50vw, 33vw)'
                            className='object-contain z-40'
                        />
                    )}
                    {imageDecor && (
                        <Image
                            ref={leafTrRef}
                            src={imageDecor}
                            alt={title}
                            width={125}
                            height={125}
                            className='object-contain z-20 absolute top-2/12 md:-top-0/12 left-2/5 transform rotate-70'
                        />
                    )}
                    {imageDecor && (
                        <Image
                            ref={leafBlRef}
                            src={imageDecor}
                            alt={title}
                            width={125}
                            height={125}
                            className='object-contain z-30 absolute top-6/12 md:top-8/12 right-3/5 transform rotate-240'
                        />
                    )}
                    {imageBG && (
                        <Image
                            src={imageBG}
                            alt={title}
                            width={300}
                            height={300}
                            className='object-cover absolute z-20 bottom-1/5 left-6/12 transform -translate-x-6/12'
                        />
                    )}
                </div>
            </div>
            <div className={`flex md:flex-1/2 justify-center pt-6 md:pt-0`}>
                <div className={`w-full md:w-8/12`}>
                    <div className={`flex flex-col gap-6`}>
                        <p ref={pretextRef} className={`text-xl font-semibold`}>{preText}</p>
                        <h2 ref={titleRef} className={`leading-tight`}>
                            {title}
                        </h2>
                        <div ref={btnRef}>
                            <Button variant="sg_primary">
                                Download Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}