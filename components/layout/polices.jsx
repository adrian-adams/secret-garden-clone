// React
import React from 'react'
// Nextjs
import Link from 'next/link'
// Components
import Heading from "@/components/layout/heading";
import { Separator } from "@/components/ui/separator";
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function Polices({ title, copy }) {
    return (
        <>
            <div className={`relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10`}>
                <div className={`md:sticky top-20 h-fit col-span-1`}>
                    <h1 className='text-4xl font-extrabold border-b-4 border-(--sg-olive) mb-4 md:pt-8'>
                        {title}
                    </h1>
                </div>
                <div className={`col-span-1 md:col-span-2 space-y-4 pt-4`}>
                    <RichText
                        content={copy}
                        renderers={{
                            h2: ({ children }) => (
                                <h2 className={`text-3xl font-bold `}>{children}</h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className={`text-2xl font-semibold `}>{children}</h3>
                            ),
                            h4: ({ children }) => (
                                <h4 className={`text-xl font-bold `}>{children}</h4>
                            ),
                            p: ({ children }) => (
                                <p className={`text-[clamp(0.875rem,5vw,1.25rem)]`}>{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className={`text-sm space-y-1 px-4 md:px-10`}>{children}</ul>
                            ),
                            li: ({ children }) => (
                                <li className={`text-sm list-disc`}>{children}</li>
                            ),
                            a: ({ children, openInNewTab, href, rel, ...rest }) => {
                                if (href.match(/^https?:\/\/|^\/\//i) || href.startsWith("mailto:") || href.startsWith("tel:")) {
                                    return (
                                        <a
                                            title={children}
                                            href={href}
                                            target={openInNewTab ? '_blank' : '_self'}
                                            rel={rel || 'noopener noreferrer'}
                                            className={`text-[clamp(0.875rem,5vw,1.25rem)] break-all underline text-(--sg-green) active:text-(--sg-olive) font-bold cursor-pointer`}>
                                            {children}
                                        </a>
                                    )
                                }
                                return (
                                    <Link href={href}>
                                        <span {...rest}>{children}</span>
                                    </Link>
                                )
                            }
                        }}
                    />
                </div>
            </div>
            <Separator size="md" bg="olive" />
        </>
    )
}