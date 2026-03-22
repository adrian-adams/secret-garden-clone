
'use client'
// React
import React, { Suspense } from 'react';
// Components
import FooterNewsletter from '../client/footer-newsletter';
import FooterServices from '../client/footer-services';
import FooterGallery from '../client/footer-gallery';
import FooterAbout from '../client/about/footer-about';
import FooterContact from '../client/about/footer-contact';
import FooterSocials from '../client/about/footer-socials';
import FooterYear from '../client/end/footer-year';
import FooterPolicies from '../client/end/footer-policies';
import { Spinner } from '@/components/ui/spinner';

export default function FooterClient({ services, gallery, footer, socials }) {

    return (
        <Suspense fallback={<Spinner />}>
            <footer className={`space-y-10 bg-(--sg-locator)`}>
                <FooterNewsletter className={`gsap-newsletter`} />
                {/* Services */}
                <FooterServices services={services} />
                {/* Gallery */}
                <FooterGallery gallery={gallery} />
                {/* About & Contact & Socials */}
                <section className={`grid grid-cols-1 md:grid-cols-4 gap-8`}>
                    <FooterAbout footer={footer} />
                    <FooterContact footer={footer} />
                    <FooterSocials footer={footer} socials={socials} />
                </section>
                {/* Year & Pages */}
                <div className={`bg-black text-white py-6 text-sm`}>
                    <section className={`flex flex-col md:flex-row justify-between items-start gap-3`}>
                        <FooterYear footer={footer} />
                        <FooterPolicies />
                    </section>
                </div>
            </footer >
        </Suspense>
    )
}
