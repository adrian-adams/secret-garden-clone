// React
import React from 'react'

// NextJS
import Image from "next/image"

// Components
import Button from "@/components/custom/button"

const teaserStyles = {
    primary: 'flex flex-col md:flex-row gap-12 md:gap-6 items-center',
    secondary: 'flex flex-col md:flex-row-reverse gap-5 md:gap-8 items-center',
    third: 'flex flex-col gap-5 md:gap-8',
}

const widthStyles = 'w-50 md:w-8/12'

export default function Teaser({ image, imageBG, imageDecor, preText, title, buttonText, link, tab, variant = 'primary' }) {
    const appliedVariant = teaserStyles[variant] ?? teaserStyles.primary;

    return (
        <div className={`${appliedVariant} relative py-20`}>
            <div className='relative flex-1/2'>
                <div className={`relative w-65 md:w-8/12 h-100 mx-auto`}>
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes='(max-width: 768px) 50vw, (max-wdith: 1200px) 50vw, 33vw)'
                            className='object-contain z-40'
                        />
                    )}
                    {/* Top Right */}
                    {imageDecor && (
                        <Image
                            src={imageDecor}
                            alt={title}
                            width={125}
                            height={125}
                            className='object-contain z-20 absolute -top-2/12 left-3/6 sm:left-3/5 transform rotate-70'
                        />
                    )}
                    {/* Bottom Left */}
                    {imageDecor && (
                        <Image
                            src={imageDecor}
                            alt={title}
                            width={125}
                            height={125}
                            className='object-contain z-30 absolute top-8/12 right-3/5 transform rotate-240'
                        />
                    )}
                    {imageBG && (
                        <Image
                            src={imageBG}
                            alt={title}
                            width={300}
                            height={300}
                            className='object-cover absolute z-20 bottom-1/5 left-6/12 transform -translate-x-6/12'
                        />
                    )}
                </div>

            </div>
            <div className={`flex md:flex-1/2 justify-center`}>
                <div className={`w-full md:w-8/12 flex flex-col gap-6`}>
                    <p className={`text-xl font-semibold`}>{preText}</p>
                    <h2 className={`leading-tight`}>{title}</h2>
                    <div>
                        <Button cta={buttonText} link={link} target={tab ? "_blank" : "_self"} />
                    </div>
                </div>
            </div>
        </div>
    )
}