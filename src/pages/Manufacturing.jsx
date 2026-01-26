import React, { useEffect } from 'react';
import { FiSettings, FiPackage, FiShield, FiTruck } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Manufacturing.css';

const Manufacturing = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const capabilities = [
        { icon: <FiSettings />, title: t('manufacturing.capabilities.custom'), desc: t('manufacturing.capabilities.customDesc') },
        { icon: <FiPackage />, title: t('manufacturing.capabilities.private'), desc: t('manufacturing.capabilities.privateDesc') },
        { icon: <FiShield />, title: t('manufacturing.capabilities.quality'), desc: t('manufacturing.capabilities.qualityDesc') },
        { icon: <FiTruck />, title: t('manufacturing.capabilities.logistics'), desc: t('manufacturing.capabilities.logisticsDesc') }
    ];

    return (
        <div className="manufacturing-page">
            <div className="container">
                <div className="page-header text-center">
                    <h5 className="page-subtitle">{t('manufacturing.subtitle')}</h5>
                    <h1 className="page-title">{t('manufacturing.title')}</h1>
                    <p className="page-desc">
                        {t('manufacturing.description')}
                    </p>
                </div>

                <div className="capabilities-grid">
                    {capabilities.map((item, index) => (
                        <div key={index} className="capability-card">
                            <div className="cap-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stat-item">
                        <span className="stat-number">{t('manufacturing.stats.legacyValue')}</span>
                        <span className="stat-label">{t('manufacturing.stats.legacy')}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{t('manufacturing.stats.exportValue')}</span>
                        <span className="stat-label">{t('manufacturing.stats.export')}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">{t('manufacturing.stats.quality')}</span>
                    </div>
                </div>

                {/* Quote Banner */}
                <div className="quote-banner">
                    <blockquote>{t('manufacturing.quote.text')}</blockquote>
                    <cite>{t('manufacturing.quote.cite')}</cite>
                </div>

                {/* Detailed Manufacturing Process */}
                <div className="detailed-process-section">
                    <h2 className="section-title text-center">{t('manufacturing.journey.title')}</h2>
                    <p className="section-desc text-center">{t('manufacturing.journey.desc')}</p>

                    <div className="process-timeline">
                        {/* Step 1 */}
                        <div className="process-node">
                            <div className="process-number">01</div>
                            <div className="process-content">
                                <h3>{t('manufacturing.journey.step1.title')}</h3>
                                <p className="node-intro">{t('manufacturing.journey.step1.intro')}</p>
                                <ul className="node-details">
                                    <li><strong>{t('manufacturing.journey.labels.step1Silk')}</strong> {t('manufacturing.journey.step1.silk')}</li>
                                    <li><strong>{t('manufacturing.journey.labels.step1Zari')}</strong> {t('manufacturing.journey.step1.zari')}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="process-node">
                            <div className="process-number">02</div>
                            <div className="process-content">
                                <h3>{t('manufacturing.journey.step2.title')}</h3>
                                <p className="node-intro">{t('manufacturing.journey.step2.intro')}</p>
                                <ul className="node-details">
                                    <li><strong>{t('manufacturing.journey.labels.step2Graphing')}</strong> {t('manufacturing.journey.step2.graphing')}</li>
                                    <li><strong>{t('manufacturing.journey.labels.step2Jacquard')}</strong> {t('manufacturing.journey.step2.jacquard')}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="process-node">
                            <div className="process-number">03</div>
                            <div className="process-content">
                                <h3>{t('manufacturing.journey.step3.title')}</h3>
                                <p className="node-intro">{t('manufacturing.journey.step3.intro')}</p>
                                <ul className="node-details">
                                    <li><strong>{t('manufacturing.journey.labels.step3Time')}</strong> {t('manufacturing.journey.step3.time')}</li>
                                    <li><strong>{t('manufacturing.journey.labels.step3Artistry')}</strong> {t('manufacturing.journey.step3.artistry')}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="process-node">
                            <div className="process-number">04</div>
                            <div className="process-content">
                                <h3>{t('manufacturing.journey.step4.title')}</h3>
                                <p className="node-intro">{t('manufacturing.journey.step4.intro')}</p>
                                <ul className="node-details">
                                    <li><strong>{t('manufacturing.journey.labels.step4Handloom')}</strong> {t('manufacturing.journey.step4.handloom')}</li>
                                    <li><strong>{t('manufacturing.journey.labels.step4Quality')}</strong> {t('manufacturing.journey.step4.quality')}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="process-node">
                            <div className="process-number">05</div>
                            <div className="process-content">
                                <h3>{t('manufacturing.journey.step5.title')}</h3>
                                <p className="node-intro">{t('manufacturing.journey.step5.intro')}</p>
                                <ul className="node-details">
                                    <li><strong>{t('manufacturing.journey.labels.step5Fashion')}</strong> {t('manufacturing.journey.step5.fashion')}</li>
                                    <li><strong>{t('manufacturing.journey.labels.step5Partnerships')}</strong> {t('manufacturing.journey.step5.partnerships')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manufacturing;
