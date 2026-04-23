import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FiMail, FiMapPin } from 'react-icons/fi';
import './VisitSection.css';

const VisitSection = () => {
    const { t } = useLanguage();

    return (
        <section className="visit-section">
            <div className="container">
                <div className="visit-content">
                    <div className="visit-header text-center">
                        <h2 className="section-title">
                            {t('visit.title')}
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    
                    <div className="visit-grid">
                        {/* Europe Card */}
                        <div className="visit-card">
                            <div className="card-bg-icon">
                                <FiMapPin />
                            </div>
                            <div className="card-header">
                                <span className="location-tag">Europe</span>
                                <h3>{t('visit.europe')}</h3>
                            </div>
                            <div className="card-body">
                                <p className="visit-email">{t('visit.emailEurope')}</p>
                                <a href={`mailto:${t('visit.emailEurope')}`} className="btn-visit">
                                    <FiMail className="btn-icon" />
                                    <span>{t('visit.btnText')}</span>
                                </a>
                            </div>
                        </div>

                        {/* UAE Card */}
                        <div className="visit-card">
                            <div className="card-bg-icon">
                                <FiMapPin />
                            </div>
                            <div className="card-header">
                                <span className="location-tag">UAE</span>
                                <h3>{t('visit.uae')}</h3>
                            </div>
                            <div className="card-body">
                                <p className="visit-email">{t('visit.emailUAE')}</p>
                                <a href={`mailto:${t('visit.emailUAE')}`} className="btn-visit">
                                    <FiMail className="btn-icon" />
                                    <span>{t('visit.btnText')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisitSection;
