import React from 'react'
// Components
import HoverLink from '@/components/custom/sg-link';

export default function FooterContact({ footer }) {
    return (
        <div>
            <h3>{footer.contactUs}</h3>
            <ul className={`flex flex-col gap-1.5 wrap-break-word`}>
                <li>
                    <HoverLink>
                        <a
                            href={`mailto:${footer.email}`}
                            title={footer.email}>
                            {footer.email}
                        </a>
                    </HoverLink>

                </li>
                <li>
                    <HoverLink>
                        <a
                            href={`tel:${footer.phoneNumber}`}
                            title={footer.phoneNumber}>
                            {footer.phoneNumber}
                        </a>
                    </HoverLink>

                </li>
            </ul>
        </div>
    )
}
