import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇬🇧', countryCode: 'gb' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳', countryCode: 'in' },
    { code: 'zh', label: '中文', flag: '🇨🇳', countryCode: 'cn' },
    { code: 'es', label: 'Español', flag: '🇪🇸', countryCode: 'es' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦', countryCode: 'sa' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', countryCode: 'fr' },
    { code: 'pt', label: 'Português', flag: '🇧🇷', countryCode: 'br' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪', countryCode: 'de' },
    { code: 'ja', label: '日本語', flag: '🇯🇵', countryCode: 'jp' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺', countryCode: 'ru' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷', countryCode: 'tr' },
];

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        const saved = localStorage.getItem('language');
        // Validate saved language is still supported
        if (saved && LANGUAGES.some(l => l.code === saved)) {
            return saved;
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        // Set HTML dir attribute for RTL languages (Arabic)
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    const setLanguage = (code) => {
        if (LANGUAGES.some(l => l.code === code)) {
            setLanguageState(code);
        }
    };

    // Keep toggleLanguage for backward compatibility (cycles through languages)
    const toggleLanguage = () => {
        const currentIndex = LANGUAGES.findIndex(l => l.code === language);
        const nextIndex = (currentIndex + 1) % LANGUAGES.length;
        setLanguageState(LANGUAGES[nextIndex].code);
    };

    // Helper to get nested translation keys like 'nav.home'
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                // Fallback to English
                let fallback = translations['en'];
                for (const fk of keys) {
                    if (fallback && fallback[fk]) {
                        fallback = fallback[fk];
                    } else {
                        return key;
                    }
                }
                return fallback;
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
