// API
import { fetchHygraph } from "@/api/hygraph";
// GrapghQL queries
import { footerDetails } from "@/gql-queries/footer";
// Components
import Policies from "@/components/layout/polices";

export const metadata = {
  title: "Terms and Conditions | Secret Garden",
  description: "This Terms and Conditions describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
}

export default async function TermsConditions() {
    const footerData = await fetchHygraph(footerDetails);
    const data = footerData.footers[0];

    return (
        <>
            <Policies
                title={data?.footerPages?.[1]?.title}
                copy={data?.footerPages?.[1]?.text.json}
            />
        </>
    )
}