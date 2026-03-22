import React from 'react'

export default function FooterYear({ footer }) {
    let year = footer.year;
    year = new Date();
    const currentYear = year.getFullYear();

    return (
        <div className={`px-2`}>
            <p> &#169; {currentYear}</p>
        </div>
    )
}
