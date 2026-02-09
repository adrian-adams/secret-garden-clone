// React
import React from 'react'
//Components
import ProductCard from "@/components/products/product-card"

export default function ProductList({ queryResults = [], tags }) {
    const productFilter = tags ?
        queryResults.filter((item) => item.tags?.includes(tags)) :
        queryResults;
    return (
        <>
            {productFilter?.length > 0 &&
                <ul className="sg-grid">
                    {productFilter.map((item) => (
                        <li key={item.id}>
                            <ProductCard
                                title={item.title}
                                price={item.price}
                                tags={item.tags}
                                image1={item.thumbnail?.[0]?.url}
                                image2={item.thumbnail?.[1]?.url}
                                slug={item.slug}
                            />
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}
