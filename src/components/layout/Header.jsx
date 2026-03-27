import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage, LANGUAGES } from '../../contexts/LanguageContext';
import logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

    // Close language dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLangSelect = (code) => {
        setLanguage(code);
        setIsLangOpen(false);
    };

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
                        {/* Language Dropdown */}
                        <div className="lang-dropdown" ref={langRef}>
                            <button
                                className="lang-toggle"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                aria-label="Switch Language"
                                aria-expanded={isLangOpen}
                            >
                                <FiGlobe size={18} />
                                <span className="lang-current-label">{currentLang.flag} {currentLang.label}</span>
                                <FiChevronDown size={14} className={`lang-chevron ${isLangOpen ? 'open' : ''}`} />
                            </button>
                            {isLangOpen && (
                                <div className="lang-dropdown-menu">
                                    {LANGUAGES.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className={`lang-option ${language === lang.code ? 'active' : ''}`}
                                            onClick={() => handleLangSelect(lang.code)}
                                        >
                                            <span className="lang-option-flag">{lang.flag}</span>
                                            <span className="lang-option-label">{lang.label}</span>
                                            {language === lang.code && <span className="lang-check">✓</span>}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

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
