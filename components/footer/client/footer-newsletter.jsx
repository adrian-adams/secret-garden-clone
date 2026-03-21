'use client'
// React
import React, { useState, useEffect, useRef } from 'react';
// NextJS
import { usePathname } from 'next/navigation';
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createFadeInScroll } from '@/gsap-animations/custom-gsap';
// Components
import Form from '@/components/form/newsletter'
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/layout/heading';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FooterNewsletter() {
    const [isHydrated, setIsHydrated] = useState(false);
    const container = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useGSAP(() => {
        if (!container.current) return;

        console.log("Hydration: ", isHydrated);

        setTimeout(() => {
            // gsap.from('.gsap-info', createFadeInScroll('.gsap-info', { xPercent: -100 }));
            // gsap.from('.gsap-form', createFadeInScroll('.gsap-form', { xPercent: 100 }));

            gsap.fromTo('.gsap-info',
                createFadeInScroll('.gsap-info', { xPercent: -100, opacity: 0 }),
                createFadeInScroll('.gsap-info', { xPercent: 0, opacity: 1 }),
            );

            gsap.fromTo('.gsap-form',
                createFadeInScroll('.gsap-form', { xPercent: 100, opacity: 0 }),
                createFadeInScroll('.gsap-form', { xPercent: 0, opacity: 1 }),
            );


            ScrollTrigger.refresh();
        }, 100);

    }, { dependencies: [pathname, isHydrated] })

    return (
        <section className={`bg-white pb-6 px-10 lg:px-30 w-full overflow-hidden`}>
            <Heading title={"Join our Newsletter"} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`} ref={container}>
                <div className={`gsap-info`}>
                    <p className={``}>Subcribe now to recieve our monthly newsletter! Awesome features include:</p>
                    <ul className={` sg-list p-3`}>
                        <li>Newsletter only disocunts.</li>
                        <li>New plant promos & reveals.</li>
                        <li>Tales of our amazing plants.</li>
                        <li>Compeition winner lists and articles.</li>
                    </ul>
                    <p className={``}>And much more...!</p>
                </div>
                <div className={`gsap-form`}>
                    <Form />
                </div>
            </div>
            <Separator size="md" />
        </section>
    )
}
