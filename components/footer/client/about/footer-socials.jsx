import React from 'react'
// Components
import HoverLink from '@/components/custom/sg-link';

export default function FooterSocials({ footer, socials }) {
    return (
        <div>
            <h3>{footer.followUs}</h3>
            <ul className={`flex flex-col`}>
                {socials?.map((social) => (
                    <li
                        key={social.id}
                        className={`max-w-6 `}>
                        <a
                            href={social.link}
                            target="_blank"
                            title={social.title}
                            className={`flex flex-row justify-start items-center gap-4`}
                        >
                            {social.beforeImage?.url && (
                                <img
                                    src={social.beforeImage.url}
                                    alt={social.title} />
                            )}
                            <HoverLink variant="black">
                                {social.title}
                            </HoverLink>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
