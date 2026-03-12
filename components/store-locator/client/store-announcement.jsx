'use client'
import React from 'react'

export default function StoreAnnouncement({ store }) {
    return (
        <>
            {store.specialAnnouncement?.text && (
                <div
                    className={`w-full 
                                sg-font-medium
                                text-black 
                                max-h-20 
                                bg-(--sg-lightgreen) 
                                rounded-2xl 
                                p-3 
                                lg:p-5 
                                background-blur 
                                text-center
                                md:text-start`}>
                    <p>{store.specialAnnouncement?.text}</p>
                </div>
            )}
        </>
    )
}
