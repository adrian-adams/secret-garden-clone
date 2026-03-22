'use client'
// React
import React, { useRef } from 'react'
// NextJs
import Image from 'next/image';
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createFadeIn } from '@/gsap-animations/custom-gsap';

// Components
import SGImage from '@/components/custom/sg-image';
// const backgroundImage = '';

export default function Hero({ heading, text, bg_desktop, bg_mobile, children }) {
    const container = useRef();
    const teaserRef = useRef();
    const childrenRef = useRef();

    useGSAP(() => {
        gsap.from(".gsap-hero-teaser", createFadeIn({ yPercent: 100 }));
        gsap.from(".gsap-hero-img", createFadeIn());

        if (teaserRef.current) {
            teaserRef.current.addEventListener('mouseenter', () => {
                gsap.to(teaserRef.current, {
                    skewX: 5,
                    boxShadow: '-8px 8px 0px #0f342d',
                    duration: 0.3,
                    ease: 'power2.out',
                    maxWidth: '600',
                    backgroundColor: 'rgba(212, 227, 211, 0.8)'
                });
            });

            teaserRef.current.addEventListener('mouseleave', () => {
                gsap.to(teaserRef.current, {
                    skewX: 0,
                    boxShadow: '0px 0px 0px',
                    duration: 0.3,
                    ease: 'power2.out',
                    maxWidth: '520',
                    backgroundColor: 'rgba(212, 227, 211, 1)'
                });
            });

            teaserRef.current.addEventListener('mouseenter', () => {
                gsap.to('.gsap-content', {
                    duration: 0.3,
                    ease: 'power2.out',
                    translateX: -5,
                    translateY: -5,
                    scale: 1.04,
                    textShadow: '-5px 5px 15px #000',
                    stagger: 0.1,
                });
            });

            teaserRef.current.addEventListener('mouseleave', () => {
                gsap.to('.gsap-content', {
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    textShadow: '0px 0px 0px',
                    duration: 0.3,
                    ease: 'power2.out',
                    stagger: 0.1,
                });
            });

            childrenRef.current.addEventListener('mouseenter', () => {
                gsap.to('.gsap-children', {
                    // translateX: 5,
                    boxShadow: '-7px 7px 10px #000',
                    translateY: -15,
                    duration: 0.3,
                    ease: 'power2.out',
                    padding: '15px'
                });
            });

            childrenRef.current.addEventListener('mouseleave', () => {
                gsap.to('.gsap-children', {
                    // translateX: 0,
                    boxShadow: '0px 0px 0px',
                    translateY: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    padding: '0px'
                });
            });
        }
    }, { scope: container });

    return (
        <div className='relative h-screen' ref={container}>
            <div className={`gsap-hero-img h-full relative`}>
                {/* Desktop */}
                {bg_desktop && (
                    <Image
                        src={bg_desktop}
                        alt={heading}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                        // unoptimized
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                        priority
                        // unoptimized
                        loading="eager"
                        className={`w-full h-auto object-cover block md:hidden`}
                    />
                )}
            </div>
            <div className='gsap-hero-teaser bg-(--sg-olive) flex flex-col content-center gap-3 text-start rounded-4xl p-10 absolute bottom-10 md:bottom-0 left-0 m-4 md:m-8 bg-opacity-90 hover:skew-12' ref={teaserRef}>
                <div className={`max-w-120 space-y-4`}>
                    <h1 className='gsap-content uppercase font-bold '>{heading}</h1>
                    <p className='gsap-content sg-font-large leading-snug'>{text}</p>
                    <div className={`gsap-content gsap-children rounded-4xl`} ref={childrenRef}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
