// React
import React from 'react'
// NextJS
import Image from 'next/image';

export default function FooterServices({ services }) {
    return (
        <div className={`border-b border-b-gray-400`}>
            <section>
                <ul className={`flex flex-col md:flex-row justify-between gap-6 pb-4 `}>
                    {services?.map((service) => (
                        <li
                            key={service.id}
                            className={`relative flex flex-row flex-wrap items-center gap-4 text-xl lg:text-2xl`}
                        >
                            {service.beforeImage?.url && (
                                <Image
                                    src={service.beforeImage.url}
                                    width={36}
                                    height={36}
                                    // fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={`object-cover`}
                                    alt={service.title}
                                />
                            )}
                            {service.title}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
