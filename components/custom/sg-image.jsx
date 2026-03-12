// React
import React from 'react'
// NextJS
import Image from 'next/image';

export default function SgImage() {
    return (
        <div>
            <Image
                className={`object-cover absolute`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
    )
}
