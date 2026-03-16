// API
import { fetchHygraph } from "@/api/hygraph";
// GrapghQL queries
import { footerDetails } from "@/gql-queries/footer";
// Components
import Policies from "@/components/layout/polices";

export const metadata = {
  title: "Privacy Policy | Secret Garden",
  description: "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
}

export default async function PrivacyPolicy() {
    const footerData = await fetchHygraph(footerDetails);
    const data = footerData.footers[0];

    return (
        <>
            <Policies
                title={data?.footerPages?.[0]?.title}
                copy={data?.footerPages?.[0]?.text.json}
            />
        </>
    )
}