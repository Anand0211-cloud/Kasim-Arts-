import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../pages/Contact.css';

const ContactFormSection = ({ title, showHeader = false }) => {
    const { t } = useLanguage();

    const [formData, setFormData] = React.useState({
        name: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value, type, name } = e.target;
        // For radio buttons, name is 'inquiryType', for others we use id
        const key = type === 'radio' ? name : id;
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `New Inquiry from Website: ${formData.inquiryType || 'General'}`;
        const body = `
Name: ${formData.name}
Company: ${formData.company}
Country: ${formData.country}
Email: ${formData.email}
Phone: ${formData.phone}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:kasimartsworld@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section className="contact-section-component" style={{ padding: '4rem 0' }}>
            <div className="container">
                {showHeader && (
                    <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className="section-title">{title || t('home.contactForm.title')}</h2>
                        <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                            {t('home.contactForm.sectionDesc')}
                        </p>
                    </div>
                )}

                <div className="contact-form-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">{t('home.contactForm.labelName')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('home.contactForm.namePlaceholder')}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">{t('home.contactForm.labelCompany')}</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder={t('home.contactForm.companyPlaceholder')}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">{t('home.contactForm.labelCountry')}</label>
                                <input
                                    type="text"
                                    id="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder={t('home.contactForm.labelCountry')}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('home.contactForm.labelEmail')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('home.contactForm.emailPlaceholder')}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">{t('home.contactForm.labelPhone')}</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={t('home.contactForm.phonePlaceholder')}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>{t('home.contactForm.labelInquiry')}</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="wholesale"
                                        checked={formData.inquiryType === 'wholesale'}
                                        onChange={handleChange}
                                    /> {t('home.contactForm.types.wholesale')}
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="custom"
                                        checked={formData.inquiryType === 'custom'}
                                        onChange={handleChange}
                                    /> {t('home.contactForm.types.custom')}
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="partnership"
                                        checked={formData.inquiryType === 'partnership'}
                                        onChange={handleChange}
                                    /> {t('home.contactForm.types.partnership')}
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t('home.contactForm.labelMessage')}</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('home.contactForm.messagePlaceholder')}
                                className="form-control"
                                required
                            ></textarea>
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
