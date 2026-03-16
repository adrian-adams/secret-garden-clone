'use client'
import React, { useRef } from 'react';
import Image from "next/image"
import { usePathname } from 'next/navigation'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FooterGallery({ gallery }) {
    const pathname = usePathname();
    const containerGallery = useRef();

    useGSAP(() => {
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill();
        });

        setTimeout(() => {
            gsap.to('.gsap-footer-gallery', {
                scrollTrigger: {
                    trigger: containerGallery.current,
                    scrub: true,
                    // markers: true
                },
                scale: 1.5,
                duration: 0.6,
                ease: 'power2.out'
            });

            ScrollTrigger.refresh();
        }, 50);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, [pathname]);

    return (
        <section ref={containerGallery}>
            <ul className={`grid grid-cols-2 md:grid-cols-4 gap-6 justify-center h-100 md:h-50 lg:h-65 xl:h-70 xxl:h-80`}>
                {gallery?.map((img) => (
                    <li key={img.id} className={`relative flex justify-center h-full w-full rounded-xl overflow-hidden`}>
                        {img && (
                            <Image
                                src={img.url}
                                loading='eager'
                                fill
                                sizes="(min-width: 768px) 100vw, 33vw"
                                className={`gsap-footer-gallery object-cover`}
                                alt="Gallery"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}