'use client'
// React
import React, { useState, useRef } from 'react'
// NextJS
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Components
import StoreDetails from '@/components/store-locator/client/store-details';
import StoreOperations from '@/components/store-locator/client/store-operations';
import StoreAnnouncement from '@/components/store-locator/client/store-announcement';

const storeNames = `
        relative
        after:content-['']
        after:absolute after:left-0 after:-bottom-1
        after:w-full after:h-0.5
        after:bg-(--sg-green)
        after:origin-left after:scale-x-0
        after:transition-transform after:duration-250 after:ease-in-out
        hover:after:scale-x-100
    `
export default function StoreSwiper({ stores }) {
    return (
        <div className={`relative`}>
            <div className={`absolute top-1/2 left-1/2 -translate-x-6/12 z-50`}>
                <h2 className={`uppercase text-black text-md md:text-4xl! leading-tight pb-4`}>Come visit our store</h2>
                <ul className={`swiper-pagination relative!`}>
                    {stores.map((name) => (
                        <li key={name.id} className={`uppercase cursor-pointer sg-font-medium ${storeNames}`}>
                            {name.storeName}
                        </li>
                    ))}
                </ul>
            </div>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={300}
                mousewheel={false}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className={` relative bg-(--sg-locator) grid grid-cols-1 md:grid-cols-3 h-full! md:h-[calc(100vh-250px)]!`}
            >

                {stores.map((store, index) => (
                    <SwiperSlide key={store.id} className={``}>
                        <div className={`relative h-full rounded-none gap-0 content-end`}>
                            <Image
                                src={store.storeImage.url}
                                alt={store.storeName}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                quality={`100%`}
                                className={`object-cover`}
                            />

                            <div className={`relative h-full flex flex-col gap-4 p-4 ${store.specialAnnouncement ? 'justify-between' : 'justify-start md:justify-end'} `}>
                                <StoreAnnouncement store={store} />
                                <div className={`bg-(--sg-olive) w-full rounded-2xl p-6 md:p-8`}>
                                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center`}>
                                        <StoreDetails store={store} />
                                        <StoreOperations store={store} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

