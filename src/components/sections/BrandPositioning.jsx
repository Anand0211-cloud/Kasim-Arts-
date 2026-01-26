import React from 'react';
import { FiGlobe, FiUsers, FiAward, FiTruck } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import './BrandPositioning.css';

const BrandPositioning = () => {
    const { t } = useLanguage();

    const stats = [
        { icon: <FiGlobe />, number: "Global", label: t('home.positioning.stats.countries') },
        { icon: <FiUsers />, number: "200+", label: t('home.positioning.stats.artisans') },
        { icon: <FiAward />, number: "150+", label: t('home.positioning.stats.legacy') },
    ];

    return (
        <section className="positioning-section">
            <div className="container">
                <div className="positioning-grid">
                    <div className="positioning-content">
                        <h5 className="section-subtitle">{t('home.positioning.subtitle')}</h5>
                        <h2 className="section-title">{t('home.positioning.title')}</h2>
                        <p className="section-desc">
                            {t('home.positioning.desc')}
                        </p>
                        <div className="features-list">
                            <div className="feature-item">
                                <h3>{t('home.positioning.feature1Title')}</h3>
                                <p>{t('home.positioning.feature1Desc')}</p>
                            </div>
                            <div className="feature-item">
                                <h3>{t('home.positioning.feature2Title')}</h3>
                                <p>{t('home.positioning.feature2Desc')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPositioning;
