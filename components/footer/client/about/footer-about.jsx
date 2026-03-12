import React from 'react'

export default function FooterAbout({ footer }) {
    return (
        <div className={`md:col-span-2`}>
            <h3>{footer.aboutUs}</h3>
            <p>{footer.aboutUsDesc}</p>
        </div>
    )
}
