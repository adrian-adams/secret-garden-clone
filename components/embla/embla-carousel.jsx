'use client'
// React
import React from 'react'
// NextJS

// Components
import Button from '@/components/custom/button'

// Embla
import { DotButton, useDotButton } from '@/components/embla/embla-carousel-dot-button'
import { useAccessibility } from '@/components/embla/embla-carousel-accessibility'
// import Accessiblity from 'embla-carousel-accessibility'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
    const { slides, options } = props
    stores = [
        {
            id,
            storeName,
            image,
            address,
            phone,
            email,
            operations: [
                day,
                opening,
                closing
            ],
            accouncement,
            directions
        }
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Accessiblity({
            announceChanges: true,
            rootNode: (emblaRoot) => emblaRoot.parentElement
        }),
        typeof window !== 'undefined' ? options : undefined
    ])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    useAccessibility(emblaApi)

    return (
        <section className={`embla flex flex-col md:flex-row`}>
            <div className="embla__viewport" ref={emblaRef}>
                {/* Store Details */}
                <div className="embla__container">
                    {slides.map((store) => (
                        <div className={`embla__slide bg-[url(${store.image})] bg-cover bg-center`} key={store.id}>
                            {/* <div className="embla__slide__number">{index + 1}</div> */}
                            <div>
                                <p>Address: {store.address} </p>
                                <p>
                                    Phone: <a href={`tel:${store.phone}`}>{store.phone}</a>
                                </p>
                                <p>
                                    Email: <a href={`mailto:${store.email}`}>{store.email}</a>
                                </p>
                                <ul>
                                    {store.operations.map((op) =>
                                        <li key={op.id}>{op.day}: {op.opening}am - {op.closing}pm</li>
                                    )}
                                </ul>
                                <Button
                                    title={store.storeName}
                                    cta="Directions"
                                    link={store.directions}
                                    target={tab ? "_blank" : "_self"}
                                    variant="primary"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Store Names */}
            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <div key={index}>
                            <DotButton
                                onClick={() => onDotButtonClick(index)}
                                className={'embla__dot'.concat(
                                    index === selectedIndex ? ' embla__dot--selected' : ''
                                )}
                            />
                            {slides[index]?.storeName}
                            <span className={`embla__underline`}></span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__live-region" />
        </section>
    )
}

export default EmblaCarousel
