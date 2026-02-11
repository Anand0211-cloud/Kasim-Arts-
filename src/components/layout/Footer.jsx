import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">KASIM ARTS</h3>
                        <p className="footer-desc">
                            {t('footer.desc')}
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                            <a href="#" aria-label="Instagram"><FiInstagram /></a>
                            <a href="#" aria-label="Facebook"><FiFacebook /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>{t('footer.links')}</h4>
                        <ul>
                            <li><Link to="/">{t('nav.home')}</Link></li>
                            <li><Link to="/about">{t('nav.heritage')}</Link></li>
                            <li><Link to="/collections">{t('nav.collections')}</Link></li>
                            <li><Link to="/manufacturing">{t('nav.manufacturing')}</Link></li>
                            <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Collections */}
                    <div className="footer-links">
                        <h4>{t('footer.collections')}</h4>
                        <ul>
                            <li><Link to="/collections?type=silk">{t('footer.items.silk')}</Link></li>
                            <li><Link to="/collections?type=chiffon">{t('footer.items.chiffon')}</Link></li>
                            <li><Link to="/collections?type=organza">{t('footer.items.organza')}</Link></li>
                            <li><Link to="/collections?type=linen">{t('footer.items.linen')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>{t('footer.contact')}</h4>
                        <ul>
                            <li>
                                <FiMapPin className="icon" />
                                <span>{t('contact.hqAddress')}</span>
                            </li>
                            <li>
                                <FiPhone className="icon" />
                                <span>+91 75250 81550</span>
                            </li>
                            <li style={{ alignItems: 'flex-start' }}>
                                <FiMail className="icon" style={{ marginTop: '5px' }} />
                                <div>
                                    <div style={{ marginBottom: '8px' }}>
                                        <small style={{ display: 'block', opacity: 0.7, fontSize: '0.75rem' }}>{t('contact.internationalEnquiry')}</small>
                                        <span>info@kasimarts.com</span>
                                    </div>
                                    <div>
                                        <small style={{ display: 'block', opacity: 0.7, fontSize: '0.75rem' }}>{t('contact.nationalEnquiry')}</small>
                                        <span>kasimartsworld@gmail.com</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kasim Arts Manufacturing. {t('footer.legal.rights')}</p>
                    <div className="legal-links">
                        <Link to="/privacy">{t('footer.legal.privacy')}</Link>
                        <Link to="/terms">{t('footer.legal.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
