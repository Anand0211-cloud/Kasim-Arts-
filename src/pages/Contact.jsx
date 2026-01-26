import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import ContactFormSection from '../components/sections/ContactFormSection';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="contact-page">
            <div className="container">
                {/* Header */}
                <div className="contact-header text-center">
                    <h1 className="page-title">{t('contact.title')}</h1>
                    <p className="page-desc">
                        {t('contact.desc')}
                    </p>
                </div>

                <div className="contact-layout">
                    {/* Inquiry Form */}
                    <div className="contact-form-wrapper-page">
                        {/* Wrapper purely for layout positioning if needed, or pass styles to component */}
                        <ContactFormSection />
                    </div>

                    {/* Sidebar / Info */}
                    <div className="contact-sidebar">
                        <div className="info-card">
                            <h3>{t('contact.hqTitle')}</h3>
                            <ul className="info-list">
                                <li>
                                    <FiMapPin className="info-icon" />
                                    <div>
                                        <strong>Kashim Arts Headquarters</strong><br />
                                        {t('contact.hqAddress')}
                                    </div>
                                </li>
                                <li>
                                    <FiPhone className="info-icon" />
                                    <div>+91 987 654 3210</div>
                                </li>
                                <li>
                                    <FiMail className="info-icon" />
                                    <div>b2b@kasimarts.com</div>
                                </li>
                            </ul>
                        </div>

                        <div className="map-placeholder">
                            {/* Simple CSS World Map Visualization Placeholder */}
                            <div className="world-map-visual">
                                <span className="map-dot dot-usa" title={t('contact.countries.usa')}></span>
                                <span className="map-dot dot-uk" title={t('contact.countries.uk')}></span>
                                <span className="map-dot dot-uae" title={t('contact.countries.uae')}></span>
                                <span className="map-dot dot-aus" title={t('contact.countries.australia')}></span>
                                <span className="map-dot dot-india" title="India (HQ)"></span>
                                <p className="map-label">{t('contact.mapLabel')}</p>
                            </div>
                        </div>

                        <div className="global-list">
                            <h4>{t('contact.globalPresence')}</h4>
                            <div className="country-grid">
                                <span>{t('contact.countries.uae')}</span>
                                <span>{t('contact.countries.uk')}</span>
                                <span>{t('contact.countries.usa')}</span>
                                <span>{t('contact.countries.singapore')}</span>
                                <span>{t('contact.countries.canada')}</span>
                                <span>{t('contact.countries.australia')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
