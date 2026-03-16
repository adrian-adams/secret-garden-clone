'use client';
import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SGSelect({ placeholder, label, array, onChange, value }) {

    return (
        <div className="flex flex-col gap-1">
            <label className={`font-bold`}>{label}</label>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="rounded-4xl w-full md:max-w-40 text-black">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{label}</SelectLabel>
                        {array?.length > 0 ? (
                            array.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))
                        ) : (
                            <SelectItem value="not-available" disabled>
                                Not available
                            </SelectItem>
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
