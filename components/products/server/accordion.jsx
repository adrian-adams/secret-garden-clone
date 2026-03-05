// React
import React from 'react'
// Components
import SGAccordion, { SGAccordionItem } from '@/components/custom/sg-accordion';
// Lucide
import { TextAlignStart } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Droplet } from 'lucide-react';
import { Smile } from 'lucide-react';
import { Van } from 'lucide-react';

export default function ProductAccordion({ data }) {

    const info = [
        data.productInfo,
        data.sun,
        data.water,
        data.petFriendly,
        data.deliveryRange,
        data.deliveryTime,
    ];

    const iconSize = "14";

    return (
        <div className={`border-t border-gray-300 pt-4`}>
            <h2 className={`sg-font-large uppercase`}>PRODUCT INFO</h2>
            <SGAccordion className={`text-xl`}>
                <SGAccordionItem
                    value="Description"
                    title="Description"
                    desc={info[0]}
                    icon={<TextAlignStart size={`${iconSize}`} />}
                />

                <SGAccordionItem
                    value="Sun"
                    title="Sun"
                    desc={info[1]}
                    icon={<Sun size={`${iconSize}`} />}
                />

                <SGAccordionItem
                    value="Water"
                    title="Water"
                    desc={info[2]}
                    icon={<Droplet size={`${iconSize}`} />}
                />

                <SGAccordionItem
                    value="Pet friendly?"
                    title="Pet friendly?"
                    desc={info[3] ? (
                        "Yes"
                    ) : (
                        "No"
                    )}
                    icon={<Smile size={`${iconSize}`} />}
                />

                <SGAccordionItem
                    value="Delivery"
                    title="Delivery"
                    desc={`Delivery between ${info?.[4]} ${info?.[5]}`}
                    icon={<Van size={`${iconSize}`} />}
                />
            </SGAccordion>
        </div>
    )
}
