// React
import React from 'react';
// NextJS
import Image from "next/image";

function PCImage({ image, title, className }) {
    return (
        <>
            {image && (
                <div className={`relative h-40 sm:h-80 md:h-60 ${className || ''}`}>
                    <Image
                        src={image}
                        alt={title}
                        className={`object-cover`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
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
        <div className={`relative grid grid-cols-2 md:grid-cols-1 gap-4`}>
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
                className={`col-span-2 lg:col-span-1`}
            />
            <PCImage
                image={images[1]}
                title={title}
            />
            <PCImage
                image={images[2]}
                title={title}
            />
        </div>
    )
}
