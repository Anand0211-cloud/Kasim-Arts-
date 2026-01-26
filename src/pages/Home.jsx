import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Hero from '../components/sections/Hero';
import BrandPositioning from '../components/sections/BrandPositioning';
import CollectionsPreview from '../components/sections/CollectionsPreview';
import CTABanner from '../components/common/CTABanner';
import ContactFormSection from '../components/sections/ContactFormSection';

const Home = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-home">
            <Hero />
            <BrandPositioning />
            <CollectionsPreview />
            <ContactFormSection title={t('home.contactForm.title')} showHeader={true} />
            <CTABanner />
        </div>
    );
};

export default Home;
