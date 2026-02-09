import React from 'react'

export default function Heading({ title }) {
    return (
        <div className='border-b-4 border-black mb-4'>
            <h2 className='py-2'>
                {title}
            </h2>
        </div>
    )
}
