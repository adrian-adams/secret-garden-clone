'use client'
// React
import React, { useState, useRef } from 'react'
// NextJS
import Image from 'next/image';
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Components
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import StoreDetails from '@/components/store-locator/client/store-details';
import StoreOperations from '@/components/store-locator/client/store-operations';
import StoreAnnouncement from '@/components/store-locator/client/store-announcement';

gsap.registerPlugin(useGSAP, ScrollToPlugin, ScrollTrigger, SplitText);

export default function Stores({ stores }) {
    const [defaultTab, setDefaultTab] = useState(0);
    const [activeTab, setActiveTab] = useState(stores?.[defaultTab]?.id);
    const [previousTab, setPreviousTab] = useState(0);
    const tabsContainer = useRef();
    const listContainer = useRef();

    const storeBG = 'https://eu-west-2.graphassets.com/cmk70usra0h7o07mj3leebcq2/cmmrl79c7id2t07mlgruzlr5x';

    // const totalTabs = stores.length;
    // console.log(totalTabs);

    // const tabSlider = (index) => {
    //     const newTab = (index + totalTabs) % totalTabs;
    //     setDefaultTab(newTab);
    // }

    useGSAP(() => {
        const isMovingForward = defaultTab > previousTab;
        const isMovingBackward = defaultTab < previousTab;

        console.log('Direction: ', isMovingForward ? 'Foward' : isMovingBackward ? 'Backward' : 'No Change');

        if (isMovingForward) {
            gsap.from('.gsap-tab', {
                yPercent: -100,
                opacity: 0,
                filter: 'blur(10px)',
                duration: 0.6,
                ease: 'power2.out'
            });
        }

        if (isMovingBackward) {
            gsap.from('.gsap-tab', {
                yPercent: 100,
                filter: 'blur(10px)',
                duration: 0.6,
                ease: 'power2.out'
            });
        }

        // gsap.from('#gsap-store-names', {
        //     scrollTrigger: {
        //         trigger: '#gsap-store-names',
        //         toggleActions: "play pause none none"
        //     },
        //     opacity: 0,
        //     xPercent: 100,
        //     duration: 0.9,
        //     ease: 'power2.out',
        //     once: true
        // });

        // gsap.killTweensOf('#gsap-store-names');

        setPreviousTab(defaultTab);
    }, [defaultTab]);

    const handleTabChange = (newTabId) => {
        const newIndex = stores.findIndex(store => store.id === newTabId);
        setDefaultTab(newIndex);
        setActiveTab(newTabId);
    }

    return (
        <Tabs
            defaultValue={activeTab}
            onValueChange={handleTabChange}
            className={`grid grid-cols-1 md:grid-cols-3 h-full md:h-[calc(100vh-150px)] relative`}
            ref={listContainer}
        >
            {storeBG && (
                <Image
                    src={storeBG}
                    alt="Come Visit Our Store"
                    unoptimized
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover`}
                />
            )}
            <TabsList className={`w-full h-full p-10 text-left`} ref={listContainer} id='gsap-store-names'>
                <h2 className={`sg-font-xlarge uppercase text-black text-left leading-tight pb-4 z-10`}>Come visit our store</h2>
                {stores.map((store, index) => {
                    return (
                        <TabsTrigger
                            key={store.id}
                            value={store.id}
                            className={``}
                        // onClick={() => tabSlider(index)}
                        >
                            <h3 className={`uppercase cursor-pointer sg-font-medium rounded-xl`}>{store.storeName}</h3>
                        </TabsTrigger>
                    )
                })}
            </TabsList>
            <div className={`md:col-span-2 overflow-hidden`} ref={tabsContainer}>
                <div className={` h-full`}>
                    {stores.map((store) => (
                        <TabsContent
                            value={store.id}
                            key={store.id}
                            className={`h-full`}
                        >
                            <div className={`relative h-full rounded-none gap-0 content-end`}>
                                <Image
                                    src={store.storeImage.url}
                                    alt={store.storeName}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={`gsap-tab object-cover`}
                                />
                                <div className={`relative h-full flex flex-col gap-4 p-4 ${store.specialAnnouncement ? 'justify-between' : 'justify-start md:justify-end'} `}>
                                    <div className={`gsap-tab`}>
                                        <StoreAnnouncement store={store} />
                                    </div>

                                    <div className={`bg-(--sg-olive) w-full rounded-2xl p-6 md:p-8 overflow-hidden`}>
                                        <div
                                            className={`gsap-tab grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center z-50`}>
                                            <StoreDetails store={store} />
                                            <StoreOperations store={store} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </div>
            </div>
        </Tabs>
    )
}

