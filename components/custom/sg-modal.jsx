'use client'
// React
import React, { useState } from 'react'
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
import { Button } from '@/components/ui/button'

export default function Modal({ open, onOpenChange, trigger, modalTitle, modalText, children }) {

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className={`bg-[url('https://eu-west-2.graphassets.com/cmk70usra0h7o07mj3leebcq2/cmmlznkd0ct9o07mm2zoumclu')] bg-cover bg-no-repeat bg-center sm:max-w-md bg-(--sg-olive) border-4 border-white `}>
                <div className={`backdrop-blur-2xl p-4 rounded-sm space-y-4`}>
                    <DialogHeader>
                        <div className={`flex flex-row justify-between items-center`}>
                            <DialogTitle className={`sg-font-large`}>{modalTitle}</DialogTitle>
                            <DialogClose asChild>
                                <Button variant="sg_drawer_close" font="sm" size="sm">
                                    X
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
