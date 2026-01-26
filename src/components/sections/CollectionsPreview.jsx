import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import silkImg from '../../assets/collection-silk.png';
import chiffonImg from '../../assets/collection-chiffon.png';
import organzaImg from '../../assets/collection-organza.png';
import linenImg from '../../assets/collection-linen.png';
import './CollectionsPreview.css';

const collections = [
    { id: 1, title: 'Banarasi Silk', categoryKey: 'silk', image: silkImg },
    { id: 2, title: 'Pure Chiffon', categoryKey: 'chiffon', image: chiffonImg },
    { id: 3, title: 'Ethereal Organza', categoryKey: 'organza', image: organzaImg },
    { id: 4, title: 'Premium Linen', categoryKey: 'linen', image: linenImg },
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
                                <img src={item.image} alt={item.title} className="collection-image" />
                                <div className="placeholder-overlay"></div>
                            </div>
                            <div className="collection-info">
                                <span className="collection-cat">{t(`collections.filters.${item.categoryKey}`)}</span>
                                <h3 className="collection-title">{item.title}</h3>
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
