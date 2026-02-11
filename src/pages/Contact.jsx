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
                                        <strong>{t('contact.hqName')}</strong><br />
                                        {t('contact.hqAddress')}
                                    </div>
                                </li>
                                <li>
                                    <FiPhone className="info-icon" />
                                    <div>+91 75250 81550</div>
                                </li>
                                <li style={{ alignItems: 'flex-start' }}>
                                    <FiMail className="info-icon" style={{ marginTop: '5px' }} />
                                    <div style={{ width: '100%' }}>
                                        <div style={{ marginBottom: '15px' }}>
                                            <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--color-gold-primary)' }}>
                                                {t('contact.internationalEnquiry')}
                                            </strong>
                                            <a href="mailto:info@kasimarts.com" style={{ fontSize: '1.1rem' }}>info@kasimarts.com</a>
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--color-gold-primary)' }}>
                                                {t('contact.nationalEnquiry')}
                                            </strong>
                                            <a href="mailto:kasimartsworld@gmail.com" style={{ fontSize: '1.1rem' }}>kasimartsworld@gmail.com</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="map-placeholder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14421.13788289445!2d83.0035541!3d25.3528246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76435c43d%3A0x66c841a05256e633!2sPilikothi%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709971234567!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Varanasi Location"
                            ></iframe>
                            <p className="map-label" style={{ bottom: '10px' }}>{t('contact.mapLabel')}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
