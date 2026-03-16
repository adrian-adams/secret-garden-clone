// API
import { fetchHygraph } from "@/api/hygraph";
// GrapghQL queries
import { footerDetails } from "@/gql-queries/footer";
// Components
import Policies from "@/components/layout/polices";

export const metadata = {
  title: "Delivery and Returns | Secret Garden",
  description: "This Delivery and Returns policy describes Our policies and procedures on the delivery and returns of Your products when You use the Service."
}

export default async function DeliveryReturns() {
    const footerData = await fetchHygraph(footerDetails);
    const data = footerData.footers[0];

    return (
        <>
            <Policies
                title={data?.footerPages?.[2]?.title}
                copy={data?.footerPages?.[2]?.text.json}
            />
        </>
    )
}