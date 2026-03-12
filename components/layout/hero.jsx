'use client'
// React
import React, { useRef } from 'react'
// NextJs
import Image from 'next/image';
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import SGImage from '@/components/custom/sg-image';
// const backgroundImage = '';

export default function Hero({ heading, text, bg_desktop, bg_mobile, children }) {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".gsap-hero-teaser", {
            y: 200,
            opacity: 0.1,
            duration: 0.85,
            ease: 'power',
        });
    }, { scope: container });

    return (
        <div className='relative h-screen'>
            <div className={`gsap-hero-img`}>
                {/* Desktop */}
                {bg_desktop && (
                    <Image
                        src={bg_desktop}
                        alt={heading}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                        loading="eager"
                        className="object-cover absolute hidden md:block"
                    />
                )}

                {/* Mobile */}
                {bg_mobile && (
                    <Image
                        src={bg_mobile}
                        alt={heading}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                        loading="eager"
                        className={`object-cover absolute ${!bg_mobile ? 'md:hidden' : 'block'}`}
                    />
                )}
            </div>
            <div ref={container} className={``}>
                <div className='gsap-hero-teaser bg-(--sg-olive) max-w-130 flex flex-col content-center gap-3 md:gap-6 text-start rounded-4xl p-5 md:p-10 absolute bottom-0 left-0 m-4 md:m-8 bg-opacity-90'>
                    <h1 className='uppercase font-bold'>{heading}</h1>
                    <p className='sg-font-large leading-snug'>{text}</p>
                    {children}
                </div>
export default function Hero({ heading, text, bg_desktop, bg_mobile, children }) {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".gsap-hero-teaser", {
            y: 200,
            opacity: 0.1,
            duration: 0.85,
            ease: 'power',
        });

        gsap.from(".gsap-hero-img", {
            // scale: 1.5,
            opacity: 0.2,
            duration: 1.5,
            ease: 'power',
        });
    }, { scope: container });

    return (
        <div className='h-screen' ref={container}>
            <div className={`gsap-hero-img relative w-full h-full`}>
                {/* Desktop */}
                {bg_desktop && (
                    <Image
                        src={bg_desktop}
                        alt={heading}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        unoptimized
                        priority
                        loading="eager"
                        className={`object-cover hidden md:block`}
                    />
                )}

                {/* Mobile */}
                {bg_mobile && (
                    <Image
                        src={bg_mobile}
                        alt={heading}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                        unoptimized
                        className={`w-full h-auto  object-cover block md:hidden`}
                    />
                )}
            </div>
            <div className='gsap-hero-teaser bg-(--sg-olive) max-w-130 flex flex-col content-center gap-3 text-start rounded-4xl p-10 absolute bottom-0 left-0 m-4 md:m-8 bg-opacity-90'>
                <h1 className='uppercase font-bold'>{heading}</h1>
                <p className='sg-font-large leading-snug'>{text}</p>
                {children}
            </div>
        </div>
    )
}
