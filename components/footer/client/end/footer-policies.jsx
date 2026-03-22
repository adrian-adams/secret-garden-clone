import React from 'react'
// NextJS
import Link from 'next/link';
// Components
import HoverLink from '@/components/custom/sg-link';

export default function FooterPolicies() {
    const policyPages = [
        { id: 4, name: "Privacy Policy", href: "/privacy-policy" },
        { id: 5, name: "Terms & Conditions", href: "/terms-and-conditions" },
        { id: 6, name: "Deliveries & Returns", href: "./delivery-and-returns" }
    ];

    return (
        <ul className={`flex flex-col md:flex-row gap-2 md:gap-6`}>
            {policyPages?.map((page) => (
                <li key={page.id} className={`relative md:not-last:after:content-[''] md:after:absolute after:-right-3.5 after:w-0.5 not-last:after:h-full after:bg-white`}>
                    <HoverLink variant="white">
                        <Link
                            href={page.href}
                            title={page.name}
                        >
                            {page.name}
                        </Link>
                    </HoverLink>
                </li>
            ))}
        </ul>
    )
}
