// React
import React from 'react';
// NextJS
import Image from "next/image";

function PCImage({ image, title, className }) {
    return (
        <>
            {image && (
                <div className={`relative h-40 sm:h-50 md:h-60 ${className || ''}`}>
                    <Image
                        src={image}
                        alt={title}
                        className={`object-cover p-1.5 md:p-0.5`}
                        fill
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw"
                        loading='lazy'
                    // width={100}
                    // height={100}
                    />
                </div>
            )}
        </>
    )
}

export default function ProductImages({ data }) {
    const title = data.title;
    const images = [
        data.thumbnail?.[0]?.url,
        data.thumbnail?.[1]?.url,
        data.thumbnail?.[2]?.url,
    ];

    return (
        <div>
            {/* <ul >
              {images?.map((img) => (
                <li key={data.thumbnail?.id}>
                  <PCImage
                    image={img}
                    title={title}
                  />
                </li>
              ))}
            </ul> */}
            <PCImage
                image={images[0]}
                title={title}
                className={`w-full inline-flex`}
            />
            <PCImage
                image={images[1]}
                title={title}
                className={`w-1/2 md:w-full inline-flex`}
            />
            <PCImage
                image={images[2]}
                title={title}
                className={`w-1/2 md:w-full inline-flex`}
            />
        </div>
    )
}
