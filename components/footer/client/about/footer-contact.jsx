import React from 'react'
// Components
import HoverLink from '@/components/custom/sg-link';
// Lucide
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export default function FooterContact({ footer }) {

    const contactUsStyle = 'flex flex-row items-center gap-2'

    return (
        <div>
            <h3>{footer.contactUs}</h3>
            <ul className={`flex flex-col gap-1.5 break-all`}>
                <li className={`${contactUsStyle}`}>
                    <Mail size="16" />
                    <HoverLink>
                        <a
                            href={`mailto:${footer.email}`}
                            title={footer.email}>
                            {footer.email}
                        </a>
                    </HoverLink>
                </li>
                <li className={`${contactUsStyle}`}>
                    <Phone size="16" />
                    <HoverLink>
                        <a
                            href={`tel:${footer.phoneNumber}`}
                            title={footer.phoneNumber}>
                            {footer.phoneNumber}
                        </a>
                    </HoverLink>

                </li>
            </ul>
        </div >
    )
}
