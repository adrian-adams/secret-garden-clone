'use client'
// React
import React from 'react'
// Marquee
import Marquee from "react-fast-marquee";

export default function SGMarquee() {
    const ribbonContent = ["Snake", "Plant—Monstera—Parlor", "Palm—Ficus", "Snake", "Plant—Monstera—Parlor", "Palm—Ficus", " "];

    return (
        <div className={`bg-(--sg-ribbon) max-h-20 py-4 overflow-hidden`}>
            <Marquee speed={75} pauseOnHover>
                <ul className={`flex flex-row items-center justify-center gap-6`}>
                    {ribbonContent.map((item, index) => (
                        <li key={index} className={'whitespace-nowrap text-6xl shrink-0'}>
                            {item}
                        </li>
                    ))}
                </ul>
            </Marquee>
        </div>
    )
}
