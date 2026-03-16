// API
import { fetchHygraph } from "@/api/hygraph";
// GraphQL Queries
import { header } from "@/gql-queries/header";

// Components
import Hero from "@/components/layout/hero"
import Heading from "@/components/layout/heading"
import ProductList from "@/components/products/server/product-list"
import { Separator } from "@/components/ui/separator"

export default async function Shop() {
    const headerData = await fetchHygraph(header);
    const data = headerData.headers;

    return (
        <>
            <Hero 
                bg_desktop={data?.[1]?.desktop.url}
                bg_mobile={data?.[1]?.desktop.url}
                alt="Secret Garden"
                heading="New Arrivals" 
                text="Our new collection of plants delivered to your door" 
            />
            <section>
                <Heading title={"Shop"} />
                <ProductList tags={"shop"} /> 
            </section>
            <Separator size="sm" />
        </>
    )
}