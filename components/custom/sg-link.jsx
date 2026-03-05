// React
import React from 'react'

// NextJS
import Link from 'next/link';

const hoverStyle = 'inline px-3 py-1.5 rounded-[50px] active:opacity-50 transition-all duration-300 ease-in-out cursor-pointer';
const hoverColours = {
    black: 'hover:bg-black hover:text-white',
    white: 'hover:bg-white hover:text-black'
}
const textAlign = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end'
}

export default function HoverLink({ variant = 'primary', text = 'left', children }) {
    const appliedHover = hoverColours[variant] ?? hoverColours.black;
    const appliedText = textAlign[text] ?? textAlign.left;

    return (
        <span className={`${hoverStyle} ${appliedHover} ${appliedText}`}>
            {children}
        </span>
    )
}
