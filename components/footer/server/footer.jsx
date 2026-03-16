
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
import FooterClient from '@/components/footer/client/footer'

export default async function Footer() {
    const data = await fetchHygraph(footerDetails);
    const footer = data.footers[0];

    const socials = footer.socials;
    const services = footer.footerServices;
    const gallery = footer.footerGallery;


    return (
        <>
            <FooterClient
                services={services}
                gallery={gallery}
                footer={footer}
                socials={socials}
            />
        </ >
    )
}
