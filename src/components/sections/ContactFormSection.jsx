import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../pages/Contact.css';

const ContactFormSection = ({ title, showHeader = false }) => {
    const { t } = useLanguage();

    return (
        <section className="contact-section-component" style={{ padding: '4rem 0' }}>
            <div className="container">
                {showHeader && (
                    <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className="section-title">{title || t('home.contactForm.title')}</h2>
                        <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                            Interested in our collections or custom manufacturing?
                            Let's discuss how we can support your business goals.
                        </p>
                    </div>
                )}

                <div className="contact-form-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">{t('home.contactForm.labelName')}</label>
                                <input type="text" id="name" placeholder={t('home.contactForm.namePlaceholder')} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">{t('home.contactForm.labelCompany')}</label>
                                <input type="text" id="company" placeholder="Enterprises Ltd" className="form-control" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">{t('home.contactForm.labelCountry')}</label>
                                <select id="country" className="form-control">
                                    <option>{t('contact.countries.usa')}</option>
                                    {/* Using a few mapped countries as examples of existing keys or just keep simple for now. 
                                        Actually, let's keep the option values simple or use logic later. 
                                        For now, the LABEL was the concern. I'll translate the label.
                                    */}
                                    <option>Select Country</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>UAE</option>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('home.contactForm.labelEmail')}</label>
                                <input type="email" id="email" placeholder={t('home.contactForm.emailPlaceholder')} className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">{t('home.contactForm.labelPhone')}</label>
                            <input type="tel" id="phone" placeholder={t('home.contactForm.phonePlaceholder')} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>{t('home.contactForm.labelInquiry')}</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="inquiryType" value="wholesale" /> {t('home.contactForm.types.wholesale')}
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="inquiryType" value="custom" /> {t('home.contactForm.types.custom')}
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="inquiryType" value="partnership" /> {t('home.contactForm.types.partnership')}
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t('home.contactForm.labelMessage')}</label>
                            <textarea id="message" rows="4" placeholder={t('home.contactForm.messagePlaceholder')} className="form-control"></textarea>
                        </div>

                        <button type="submit" className="btn-primary full-width">{t('home.contactForm.submitBtn')}</button>
                        <p className="form-note">{t('home.contactForm.agreement')} <Link to="/privacy">{t('footer.legal.privacy')}</Link>.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
