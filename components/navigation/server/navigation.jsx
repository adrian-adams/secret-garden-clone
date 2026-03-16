import React from "react"
// API
import { fetchHygraph } from "@/api/hygraph";
// GraphQL Queries
import { logoQuery } from "@/gql-queries/logo";
// Components
import NavigationMenu from '@/components/navigation/client/navigation'

export default async function Navigation() {
    const data = await fetchHygraph(logoQuery);
    const logoImg = data.brandLogos?.[0]?.logo.url;

    return (
        <>
            <NavigationMenu logo={logoImg} />
        </>
    )
}
