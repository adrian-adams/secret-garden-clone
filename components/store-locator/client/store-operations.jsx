'use client'
import React from 'react'

export default function StoreOperations({ store }) {
    const days = ["sun", "mon", "tues", "wed", "thur", "fri", "sat",];
    const date = new Date();
    const currentDay = days[date.getDay()];
    console.log("today is", currentDay);

    return (
        <>
            <div className={`mx-auto`}>
                <ul className={`flex flex-wrap lg:flex-nowrap lg:grid lg:grid-cols-1 xl:grid-cols-2 justify-center`}>
                    {store.storeOperations?.map((op) => (
                        <li
                            key={op.id}
                            className={`flex flex-row gap-1.5 px-2 py-1.5 sg-font-small
                                                                ${op.storeDay === currentDay ?
                                    'text-white bg-black rounded-2xl justify-center pb-0.5' :
                                    'text-black'}`
                            }>
                            <span className={`uppercase inline-block font-semibold `}>
                                {op.storeDay}:
                            </span>
                            <span className={`lowercase`}>
                                {op.openingTime}am
                            </span>
                            <span> - </span>
                            <span className={`lowercase`}>
                                {op.closingTime}pm
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
