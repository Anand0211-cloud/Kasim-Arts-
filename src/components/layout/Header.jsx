import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-wrapper">
                    <Link to="/" onClick={closeMenu} className="brand-link">
                        <img src={logo} alt="Kasim Arts" className="logo" />
                        <div className="logo-text-group">
                            <span className="brand-name">KASIM ARTS</span>
                            <span className="brand-since">Since 1885</span>
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.home')}</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.heritage')}</NavLink></li>
                        <li><NavLink to="/collections" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.collections')}</NavLink></li>
                        <li><NavLink to="/manufacturing" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.manufacturing')}</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.contact')}</NavLink></li>
                    </ul>

                    <div className="header-actions">
                        <button onClick={toggleLanguage} className="lang-toggle" aria-label="Switch Language">
                            <FiGlobe size={18} />
                            <span>{language === 'en' ? 'HI' : 'EN'}</span>
                        </button>
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        <a
                            href="mailto:kasimartsworld@gmail.com?subject=B2B Inquiry for Kasim Arts&body=Hello, I am interested in B2B partnership with Kasim Arts. Please provide more details."
                            className="btn-primary"
                            onClick={closeMenu}
                        >
                            {t('nav.b2bInquiry')}
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
