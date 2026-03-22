// React
import React from 'react'
// Components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function SGAccordionItem({ value, title, icon, desc }) {
    return (
        <AccordionItem value={value}>
            <AccordionTrigger >
                <div className={`flex flex-row items-center gap-2 text-xl`}>
                    {icon}
                    {title}
                </div>
            </AccordionTrigger>
            <AccordionContent className={`text-md md:text-lg leading-tight`}>
                {desc ? (
                    desc
                ) : (
                    "Information coming soon!"
                )}
            </AccordionContent>
        </AccordionItem>
    )
}

export default function SGAccordion({ children }) {
    return (
        <Accordion type="single" collapsible>
            {children}
        </Accordion>
    )
}
