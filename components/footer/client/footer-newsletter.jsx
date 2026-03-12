// React
import React from 'react'
// Components
import Form from '@/components/form/newsletter'
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/layout/heading';

export default function FooterNewsletter() {
    return (
        <div className={`bg-white pb-6`}>
            <section>
                <Heading title={"Join our Newsletter"} />
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                    <div>
                        <p>Subcribe now to recieve our monthly newsletter! Awesome features include:</p>
                        <ul className={`sg-list p-3`}>
                            <li>Newsletter only disocunts.</li>
                            <li>New plant promos & reveals.</li>
                            <li>Tales of our amazing plants.</li>
                            <li>Compeition winner lists and articles.</li>
                        </ul>
                        <p>And much more...!</p>
                    </div>
                    <Form />
                </div>
                <Separator size="md" />
            </section>
        </div>
    )
}
