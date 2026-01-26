import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './CTABanner.css';

const CTABanner = () => {
    const { t } = useLanguage();

    return (
        <section className="cta-banner">
            <div className="container text-center">
                <h2 className="cta-title">{t('home.cta.title')} <span className="gold-text">{t('home.cta.titleHighlight')}</span></h2>
                <p className="cta-desc">
                    {t('home.cta.desc')}
                </p>
                <div className="cta-actions">
                    <Link to="/contact" className="btn-primary">{t('home.cta.btnRequest')}</Link>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
