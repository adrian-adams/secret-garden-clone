'use client'
// React
import React, { useState } from 'react'
// NextJS
import Image from 'next/image'
// Components
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
// Lucide
import { CircleX } from 'lucide-react';

export default function Modal({ open, onOpenChange, trigger, modalTitle, modalText, children }) {
    const bgImage = 'https://eu-west-2.graphassets.com/cmk70usra0h7o07mj3leebcq2/cmmrrq955p3ts07l5wrjepoid';

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className={`sm:max-w-md bg-(--sg-olive) border-4 border-white`}>
                <Image
                    src={bgImage}
                    alt="Secret Garden"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-fit rounded-md`}
                />
                <div className={`bg-white z-10 p-4 rounded-sm space-y-4 `}>
                    <DialogHeader>
                        <div className={`flex flex-row justify-between items-center`}>
                            <DialogTitle className={`sg-font-large`}>{modalTitle}</DialogTitle>
                            <DialogClose asChild>
                                <Button variant="sg_secondary" size="sm">
                                    <CircleX />
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogHeader>
                    <DialogDescription className={`sg-font-small text-black`}>
                        {modalText}
                    </DialogDescription>
                    <DialogFooter className={`flex flex-row justify-between`}>
                        {children}
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}
