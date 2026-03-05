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
                <div className={`flex flex-row items-center gap-2 text-[clamp(0.75rem,5vw,1rem)]`}>
                    {icon}
                    {title}
                </div>
            </AccordionTrigger>
            <AccordionContent>
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
