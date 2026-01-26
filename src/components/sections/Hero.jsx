import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import heroBg from '../../assets/hero-bg-new.png';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <span className="hero-subtitle fade-in-up">{t('home.hero.subtitle')}</span>
                <h1 className="hero-title fade-in-up delay-1">
                    {t('home.hero.titleLine1')}<br />
                    <span className="gold-text">{t('home.hero.titleLine2')}</span>
                </h1>
                <p className="hero-lead fade-in-up delay-2">
                    {t('home.hero.lead')}
                </p>
                <div className="hero-actions fade-in-up delay-3">
                    <Link to="/collections" className="btn-primary">{t('home.hero.btnCatalog')}</Link>
                    <Link to="/contact" className="btn-outline white-btn">{t('home.hero.btnPartner')}</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
