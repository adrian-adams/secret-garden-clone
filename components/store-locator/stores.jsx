'use client'
// React
import React, { useState } from 'react'
// NextJS
import Image from 'next/image';
// Components
import Button from '@/components/custom/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Stores({ stores, slug, storeHours }) {
    const days = ["sun", "mon", "tues", "wed", "thur", "fri", "sat",];
    const date = new Date();
    const currentDay = days[date.getDay()];
    console.log("today is", currentDay);
    const hoverStyle = 'py-1 rounded-xl hover:px-2 hover:bg-black hover:text-white transition-all ease-in duration-150';
    const textSizes = `text-md md:text-xl`;


    return (
        <Tabs defaultValue={stores?.[0]?.id} className={` bg-(--sg-locator) `}>
            <TabsList className={`py-4 gap-0`}>
                {stores.map((store) => (
                    <TabsTrigger key={store.id} value={store.id}>
                        <CardHeader>
                            <CardTitle>
                                <h3 className={`uppercase cursor-pointer ${textSizes}`}>{store.storeName}</h3>
                            </CardTitle>
                        </CardHeader>
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className={`flex-12/12`}>
                {stores.map((store) => (
                    <TabsContent value={store.id} key={store.id} className={`h-160 md:h-140`}>
                        <Card className={`relative h-full overflow-hidden rounded-none gap-0 content-end`}>

                            {/* Store Image */}
                            <CardContent className={``}>
                                <Image
                                    src={store.storeImage.url}
                                    alt={store.storeName}
                                    fill
                                    sizes="100vw"
                                    className={`object-cover`}
                                />
                            </CardContent>

                            <CardContent className={`relative h-full flex flex-col m-4 ${store.specialAnnouncement ? 'justify-between' : 'justify-end'}`}>
                                {/* Announcement */}
                                {store.specialAnnouncement?.text && (
                                    <CardDescription className={`w-full text-black  max-h-20 bg-(--sg-lightgreen) rounded-2xl p-5 background-blur ${textSizes}`}>
                                        <p>{store.specialAnnouncement?.text}</p>
                                    </CardDescription>
                                )}

                                {/* Store Details */}
                                <CardDescription className={`bg-(--sg-olive) w-full rounded-2xl p-5 ${textSizes}`}>
                                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 justify-between`}>

                                        {/* Store Information */}
                                        <div className={`flex flex-col gap-1 text-black`}>
                                            <p>Address: {store.address}</p>
                                            <p>Phone: <a href={`tel:${store.phone}`} className={`${hoverStyle}`}>{store.phone}</a></p>
                                            <p>Email: <a href={`mailto:${store.email}`} className={`${hoverStyle}`}>{store.email}</a></p>
                                            {/* Store Buttons */}
                                            <div className={`flex flex-col justify-start gap-4 mt-4`}>
                                                {store.directions?.latitude && store.directions?.longitude && (
                                                    <Button
                                                        href={`https://www.google.com/maps/dir/?api=1&destination=${store.directions.latitude},${store.directions.longitude}`}
                                                        cta="Directions"
                                                        title="Directions"
                                                        variant="primary"
                                                        width="no" />
                                                )}
                                                <Button
                                                    href={`/shop/products/${slug}`}
                                                    cta="View Store"
                                                    title="View Store"
                                                    variant="primary"
                                                    width="no" />
                                            </div>
                                        </div>

                                        {/* Store Hours */}
                                        <div className={`mx-auto`}>
                                            <ul className={`inline-block`}>
                                                {store.storeOperations?.map((op) => (
                                                    <li
                                                        key={op.id}
                                                        className={`uppercase px-3 py-1
                                                        ${op.storeDay === currentDay ?
                                                                'text-white bg-black rounded-2xl font-medium' :
                                                                'text-black'}`
                                                        }>
                                                        <span className={`inline-block w-20 pe-6`}>{op.storeDay}:</span>
                                                        {op.openingTime}<span className={`lowercase`}>am</span>
                                                        <span> - </span>
                                                        {op.closingTime}<span className={`lowercase`}>pm</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}

