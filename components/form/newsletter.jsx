'use client'
// React
import React, { useState, useEffect } from 'react'
// Formspree
import { useForm, ValidationError } from "@formspree/react";
// Components
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
// Lucide
import { MoveRight } from 'lucide-react';

const inputField = 'w-full py-6 px-2 border-black border-2 rounded-xl bg-transparent';
const submitIcon = 'size-8 text-black cursor-pointer';

export default function NewsletterForm() {
    const [state, handleSubmit, reset] = useForm("mojnjkko");
    const [openModal, setOpenModal] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (state.succeeded) {
            setOpenModal(true);
        }
    }, [state.succeeded]);

    const handleCloseModal = () => {
        reset(); // Reset Formspree state
        setFirstName(""); // Clear form inputs
        setLastName("");
        setEmail("");
        setOpenModal(false);
    };

    // useEffect(() => {
    //     if (state.succeeded) {
    //         setSuccessMessage(true);

    //         setTimeout(() => {
    //             setFirstName("");
    //             setLastName("");
    //             setEmail("");
    //             setSuccessMessage(false);
    //         }, 3000);

    //     } else if (state.errors) {
    //         setErrorMessage(true);
    //         setTimeout(() => {
    //             setErrorMessage(false);
    //         }, 3000);
    //     }
    // }, [state.succeeded]);

    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit} className={`min-w-75 flex flex-col gap-4`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4`}>
                    <InputGroup className={`${inputField}`}>
                        <InputGroupInput
                            placeholder="FIRST NAME"
                            type="text"
                            name="First Name"
                            autoComplete="true"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className={`${inputField}`}>
                        <InputGroupInput
                            placeholder="LAST NAME"
                            type="text"
                            name="Last Name"
                            autoComplete="true"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </InputGroup>
                </div>
                <InputGroup className={`${inputField}`}>
                    <InputGroupInput
                        placeholder="YOUR EMAIL"
                        type="email"
                        name="email"
                        autoComplete="true"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputGroupAddon align="inline-end">
                        <button type="submit">
                            {state.submitting ? (
                                <Spinner className={`${submitIcon}`} />
                            ) : (
                                <MoveRight className={`${submitIcon}`} />
                            )}
                        </button>
                    </InputGroupAddon>
                </InputGroup>
            </form>

            {/* Success Message */}
            <Dialog open={openModal} onOpenChange={setOpenModal} className={``}>
                <DialogContent className="sm:max-w-md bg-(--sg-olive) border-4 border-(--sg-green)">
                    <DialogHeader>
                        <DialogTitle className={`text-4xl`}>Thank You!</DialogTitle>
                        <DialogDescription className={`text-md text-black`}>
                            You are now subscribed to our newsletter!
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="sg_primary" font="sm" onClick={handleCloseModal}>Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {/* {successMessage && (
                <p className={`${submitMessage}`} >Thank you for subscribing!</p>
            )}

            {errorMessage && (
                <p className={`text-red-500 ${submitMessage}`}>There was an error. Please try again.</p>
            )} */}
        </>
    )
}
