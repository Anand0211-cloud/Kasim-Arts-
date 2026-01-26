import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import silkImg from '../../assets/collection-silk.png';
import suitImg from '../../assets/collection-suit.png';
import lehengaImg from '../../assets/collection-lehenga.png';
import './CollectionsPreview.css';

const collections = [
    {
        id: 1,
        titleKey: 'sarees',
        image: silkImg,
        pointsKeys: ['dressMaterial', 'brocade']
    },
    {
        id: 2,
        titleKey: 'suits',
        image: suitImg,
        pointsKeys: ['dressMaterial', 'brocade']
    },
    {
        id: 3,
        titleKey: 'lehengas',
        image: lehengaImg,
        pointsKeys: ['dressMaterial', 'brocade']
    },
];

const CollectionsPreview = () => {
    const { t } = useLanguage();

    return (
        <section className="collections-section">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="section-subtitle">{t('home.collectionsPreview.subtitle')}</h5>
                    <h2 className="section-title">{t('home.collectionsPreview.title')}</h2>
                    <p className="section-desc centered-desc">
                        {t('home.collectionsPreview.desc')}
                    </p>
                </div>

                <div className="collections-grid">
                    {collections.map((item) => (
                        <div key={item.id} className="collection-card">
                            <div className="collection-image-wrapper">
                                <img src={item.image} alt={t(`collections.filters.${item.titleKey}`)} className="collection-image" />
                                <div className="placeholder-overlay"></div>
                            </div>
                            <div className="collection-info">
                                <div className="collection-points">
                                    {item.pointsKeys.map((pointKey, index) => (
                                        <span key={index} className="collection-point-item d-block text-sm text-gray-500 mb-1">
                                            • {t(`home.collectionsPreview.points.${pointKey}`)}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="collection-title">{t(`collections.filters.${item.titleKey}`)}</h3>
                                <Link to="/collections" className="btn-text">{t('collections.card.request')} &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <Link to="/collections" className="btn-primary">{t('home.collectionsPreview.btnView')}</Link>
                </div>
            </div>
        </section>
    );
};

export default CollectionsPreview;
