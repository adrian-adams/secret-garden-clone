// API
import { fetchHygraph } from "@/api/hygraph";
// Queries
import { productQuery } from "@/gql-queries/products";
//Components
import ProductListClient from "@/components/products/client/product-list"

export default async function ProductList({ tags }) {
    const productData = await fetchHygraph(productQuery);
    const data = productData.products;

    return (
        <>
            <ProductListClient tags={tags} mapData={data} />
        </>
    )
}
