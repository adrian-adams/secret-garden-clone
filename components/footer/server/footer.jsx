
// React
import React from 'react'
// API
import { fetchHygraph } from "@/api/hygraph";
// GraphQL Queries
import { footerDetails } from '@/gql-queries/footer';
// Components
import FooterNewsletter from '../client/footer-newsletter';
import FooterServices from '../client/footer-services';
import FooterGallery from '../client/footer-gallery';
import FooterAbout from '../client/about/footer-about';
import FooterContact from '../client/about/footer-contact';
import FooterSocials from '../client/about/footer-socials';
import FooterYear from '../client/end/footer-year';
import FooterPolicies from '../client/end/footer-policies';


export default async function Footer() {
    const data = await fetchHygraph(footerDetails);
    const footer = data.footers[0];

    const socials = footer.socials;
    const services = footer.footerServices;
    const gallery = footer.footerGallery;

    return (
        <footer className={`flex flex-col gap-10 bg-(--sg-locator)`}>
            <FooterNewsletter />
            <FooterServices services={services} />
            <FooterGallery gallery={gallery} />
            {/* About & Contact & Socials */}
            <div>
                <section className={`grid grid-cols-1 md:grid-cols-4 gap-8`}>
                    <FooterAbout footer={footer} />
                    <FooterContact footer={footer} />
                    <FooterSocials footer={footer} socials={socials} />
                </section>
            </div>

            {/* Year & Pages */}
            <div className={`bg-black text-white py-6 text-sm`}>
                <section className={`flex flex-col md:flex-row justify-between items-center gap-3`}>
                    <FooterYear footer={footer} />
                    <FooterPolicies />
                </section>
            </div>
        </footer >
    )
}
