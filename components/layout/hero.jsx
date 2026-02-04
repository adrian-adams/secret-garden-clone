import React from 'react'
import Image from 'next/image';

// const backgroundImage = '';

export default function Hero({ heading, text, bg_desktop, bg_mobile, children }) {
    return (
        <section className='relative h-screen'>
            {/* Desktop */}
            {bg_desktop && (
                <Image
                    src={bg_desktop}
                    alt={heading}
                    fill
                    priority
                    className="object-cover hidden md:block"
                />
            )}

            {/* Mobile */}
            {bg_mobile && (
                <Image
                    src={bg_mobile}
                    alt={heading}
                    fill
                    priority
                    className="object-cover md:hidden"
                />
            )}

            <div className='bg-(--sg-olive) max-w-150 flex flex-col gap-8 text-start rounded-4xl px-6 py-10 md:px-14 md:py-18 absolute bottom-0 left-0 m-4 md:m-8 bg-opacity-90'>
                <h1 className='uppercase text-4xl md:text-6xl font-bold'>{heading}</h1>
                <p className='font-medium text-xl md:text-3xl leading-snug'>{text}</p>
                <div className='inline'>
                    {children}
                </div>
            </div>
        </section>

        // <div className={`bg-[url(${bgmb})] md:bg-[url(${bgdt})] bg-cover bg-center h-screen p-10 flex items-end justify-start`}>
        //     <div className='bg-[#d4e3d3] max-w-125 rounded-4xl p-12'>
        //         <div className='flex flex-col gap-8 text-start'>
        //             <h1 className='uppercase text-4xl font-bold'>{heading}</h1>
        //             <p className='font-medium text-2xl leading-snug'>{text}</p>
        //             <div className='inline'>
        //                 {children}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
