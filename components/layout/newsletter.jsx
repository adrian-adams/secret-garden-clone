'use client'
// React
import React, { useState } from 'react'

// Components
import Form from "@/components/form/newsletter"

export default function Newsletter({ title }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center`}>
            <h2>{title}</h2>
            <Form />
        </div>
    )
}
