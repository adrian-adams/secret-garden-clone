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
import { createSlideInY } from "@/gsap-animations/custom-gsap"
gsap.registerPlugin(useGSAP);

export function HamburgerMenu({ onClick }) {
    return (
        <button type="button" onClick={onClick} className={`md:hidden`}>
            <Menu />
        </button>
    )
}

export default function NavigationMenu({ logo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const container = useRef(null);
    const cartItems = useCartStore((state) => state.cartItems);

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
        gsap.from('.gsap-nav', createSlideInY('top'));
    }, [pathname]);

    return (
        <div className={`fixed right-0 left-0 z-50 backdrop-blur-3xl mask-[linear-gradient(to_bottom,black_80%,transparent)]`} ref={container}>
            <nav className={`gsap-nav relative m-4 p-4 rounded-3xl text-black bg-(--sg-lightgreen) overflow-hidden`}>
                <div className={`flex flex-row justify-between items-center`}>
                    <div className={`hover:scale-115 transition-all duration-500 ease-in-out`}>
                        <Link href="/">
                            {logo && (
                                <Image
                                    src={logo}
                                    // className={`object-contain`}
                                    width={115}
                                    height={47}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    // fill
                                    priority
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
                                        className={`sg-font-medium ${linkStyle} ${pathname === item.href
                                            ? `${pathStyle}`
                                            : ""}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button className={`sg-font-medium ${linkStyle} p-0 h-10 flex justify-center items-center`} onClick={toggleCart}>
                                    {cartItems.length > 0 ? (
                                        <span className={`h-10 flex flex-row items-center justify-center`}>
                                            Cart
                                            <span className={`sg-badge-green`}>
                                                {cartItems.length}
                                            </span>
                                        </span>
                                    ) : (
                                        <span>Cart</span>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>

                    <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
                {/* Mobile */}
                <ul
                    className={`flex flex-col justify-center items-center gap-2 md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'opacity-100 max-h-300 translate-y-0 py-6' : 'opacity-0 max-h-0 translate-y-0 pointer-events-none'}`}>
                    {menuItems?.map((item) => (
                        <li key={item.id}>
                            <Link href={item.href}
                                className={`text-2xl ${linkStyle} ${pathname === item.href
                                    ? `${pathStyle}`
                                    : ""}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className={`text-2xl`} onClick={toggleCart}>
                            {cartItems.length > 0 ? (
                                <span className={`flex flex-row items-center`}>
                                    Cart
                                    <span className={`sg-font-small flex flex-row items-center bg-green-950 text-white px-2.5 py-0.5 ms-2 rounded-full`}>
                                        {cartItems.length}
                                    </span>
                                </span>
                            ) : (
                                <span>Cart</span>
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
