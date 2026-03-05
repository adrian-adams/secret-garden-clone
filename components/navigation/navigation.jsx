'use client'
import React, { useState, useRef } from "react"
// NextJS
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
// Zustand
import useCartStore from '@/lib/cartStore';
// Components
import { Menu } from "lucide-react";
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HamburgerMenu({ onClick }) {
    return (
        <button type="button" onClick={onClick} className={`md:hidden`}>
            <Menu />
        </button>
    )
}

export default function Navigation({ logo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const container = useRef(null)

    const pathname = usePathname();
    const menuItems = [
        { id: 0, name: "Home", href: "/" },
        { id: 1, name: "Shop", href: "/shop" },
        // { id: 2, name: "Cart", href: "#" },
    ];

    const pathStyle = 'bg-(--sg-green) rounded-xl text-white';
    const linkStyle = `
        relative px-3 py-2
        after:content-['']
        after:absolute after:left-0 after:-bottom-1
        after:w-full after:h-0.5
        after:bg-(--sg-green)
        after:origin-center after:scale-x-0
        after:transition-all after:duration-200 after:ease-out
        hover:after:scale-x-90 cursor-pointer
    `

    useGSAP(() => {
        gsap.from('.gsap-nav', {
            yPercent: -100,
            opactiy: 1,
            duration: 0.9,
            ease: 'power2.out'
        });
    }, [pathname]);

    return (
        <header className={`fixed right-0 left-0 z-50 backdrop-blur-3xl mask-[linear-gradient(to_bottom,black_80%,transparent)]`} ref={container}>
            <nav className={`gsap-nav relative m-6 p-4 md:p-6 rounded-3xl text-black bg-(--sg-lightgreen) overflow-hidden`}>
                <div className={`flex flex-row justify-between items-center`}>
                    <div className={`hover:scale-115 transition-all duration-500 ease-in-out`}>
                        <Link href="/" className={`block`}>
                            {logo && (
                                <Image
                                    src={logo}
                                    // fill
                                    // size="(max-width: 768px) 100vw, 100vw"
                                    className={`object-cover `}
                                    width={115}
                                    height={115}
                                    alt="Secret Garden"
                                />
                            )}
                        </Link>
                    </div>
                    <div>
                        {/* Desktop */}
                        <ul className={`hidden md:flex flex-row justify-end items-center gap-1 pt-10 md:pt-0 `}>
                            {menuItems?.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.href}
                                        className={`sg-font-large ${linkStyle} ${pathname === item.href
                                            ? `${pathStyle}`
                                            : ""}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button className={`sg-font-large ${linkStyle} p-0`} onClick={toggleCart}>
                                    Cart
                                </button>
                            </li>
                        </ul>
                    </div>

                    <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
                {/* Mobile */}
                <ul
                    className={`flex flex-col justify-center items-center gap-2 md:hidden transition-all duration-500 ease-in-out overflow-hidden
                                ${isMenuOpen ? 'opacity-100 max-h-300 translate-y-0 pt-4' : 'opacity-0 max-h-0 translate-y-0 pointer-events-none'}`}>
                    {menuItems?.map((item) => (
                        <li key={item.id}>
                            <Link href={item.href}
                                className={`sg-font-medium ${linkStyle} ${pathname === item.href
                                    ? `${pathStyle}`
                                    : ""}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className={`sg-font-medium`} onClick={toggleCart}>
                            Cart
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
