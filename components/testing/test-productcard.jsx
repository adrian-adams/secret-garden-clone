import React from 'react'
import { fetchHygraph } from "@/api/hygraph";
import { testProductsQuery } from "@/gql-queries/tests";
import Image from "next/image";

// GraphQL query to fetch test products
// const testProductsQuery = `query {
//   testProducts {
//     description
//     id
//     slug
//     thumbnail {
//       url
//     }
//     title
//   }
// }`;

export default async function TestProductCard() {
    const data = await fetchHygraph(testProductsQuery);

    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testProducts.map((product) => (
                <li key={product.id} className="border p-4 rounded">
                    {product.thumbnail[0]?.url && (
                        <Image
                            src={product.thumbnail[0].url}
                            alt={product.title}
                            className="mb-3"
                            height={300}
                            width={400}
                        />
                    )}
                    <h2 className="font-semibold">{product.title}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                </li>
            ))}
        </ul>
    )
}
