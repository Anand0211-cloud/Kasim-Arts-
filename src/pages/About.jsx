import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import heritageHero from '../assets/heritage-hero-new.jpg';
import processWeaving from '../assets/process-weaving-new.jpeg';
import processDyeing from '../assets/process-dyeing-new.jpeg';
import VideoSection from '../components/sections/VideoSection';
import './About.css';

const About = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Oldest Textile Manufacturer in Varanasi";
    }, []);
    // ... (omitting unchanged lines for brevity in LLM thought process, but providing full context in tool call)
    // Actually I need to be careful with replace_file_content. I'll target the import block and the render block separately if possible, or just the whole file if small enough.
    // About.jsx is somewhat large. usage of `replace_file_content` requires exact match.
    // I will do it in two steps: 1. Add import. 2. Add component.


    const timeline = [
        { year: t('about.timeline.item1Year'), title: t('about.timeline.item1Title'), desc: t('about.timeline.item1Desc') },
        { year: t('about.timeline.item2Year'), title: t('about.timeline.item2Title'), desc: t('about.timeline.item2Desc') },
        { year: t('about.timeline.item3Year'), title: t('about.timeline.item3Title'), desc: t('about.timeline.item3Desc') },
        { year: t('about.timeline.item4Year'), title: t('about.timeline.item4Title'), desc: t('about.timeline.item4Desc') }
    ];

    return (
        <div className="about-page">
            {/* Hero / Banner - Original Simple Layout */}
            <section className="about-hero">
                <div className="container about-hero-content">
                    <div className="about-text">
                        <h5 className="section-subtitle">{t('about.hero.subtitle')}</h5>
                        <h1 className="page-title">{t('about.hero.title')}</h1>
                        <p className="page-desc">
                            {t('about.hero.desc')}
                        </p>
                    </div>
                    <div className="about-image-wrapper">
                        {/* Using the new high-quality image requested */}
                        <img src={heritageHero} alt="Master weaver working on a loom" className="about-img" />
                    </div>
                </div>
            </section>

            {/* NEW: The Art of Creation Section */}
            <section className="process-section">
                <div className="container">
                    <h2 className="section-title text-center">{t('about.process.title')}</h2>
                    <div className="process-grid">
                        <div className="process-card">
                            <div className="process-img-wrapper">
                                <img
                                    src={processWeaving}
                                    alt="Handloom Weaving Process"
                                    className="process-img"
                                    style={{
                                        width: '75%',
                                        height: 'auto',
                                        margin: '0 auto',
                                        display: 'block',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                            <div className="process-content">
                                <h3>{t('about.process.weavingTitle')}</h3>
                                <p>
                                    {t('about.process.weavingDesc')}
                                </p>
                            </div>
                        </div>
                        <div className="process-card reverse">
                            <div className="process-img-wrapper">
                                <img
                                    src={processDyeing}
                                    alt="Traditional Dyeing Process"
                                    className="process-img"
                                    style={{
                                        width: '75%',
                                        height: 'auto',
                                        margin: '0 auto',
                                        display: 'block',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                            <div className="process-content">
                                <h3>{t('about.process.dyeingTitle')}</h3>
                                <p>
                                    {t('about.process.dyeingDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Fusion of Tradition and Technology */}
            <section className="technology-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title text-center">{t('about.tech.title')}</h2>
                    <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                        {t('about.tech.desc')}
                    </p>
                    <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="tech-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gold-primary)' }}>{t('about.tech.card1Title')}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{t('about.tech.card1Desc')}</p>
                        </div>
                        <div className="tech-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gold-primary)' }}>{t('about.tech.card2Title')}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{t('about.tech.card2Desc')}</p>
                        </div>
                        <div className="tech-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gold-primary)' }}>{t('about.tech.card3Title')}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{t('about.tech.card3Desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section - Kept exactly as user liked */}
            <section className="timeline-section">
                <div className="container">
                    <h2 className="section-title text-center">{t('about.timeline.title')}</h2>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <VideoSection />

            {/* Craftsmanship Philosophy - Kept exactly as user liked */}
            <section className="philosophy-section">
                <div className="container text-center">
                    <h2 className="section-title">{t('about.philosophy.title')}</h2>
                    <p className="philosophy-text">
                        {t('about.philosophy.text')}
                    </p>
                    <div className="artisan-stats">
                        <div className="stat-box">
                            <span className="gold-text">100%</span>
                            <p>{t('about.philosophy.stat1Label')}</p>
                        </div>
                        <div className="stat-box">
                            <span className="gold-text">Ethical</span>
                            <p>{t('about.philosophy.stat2Label')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
