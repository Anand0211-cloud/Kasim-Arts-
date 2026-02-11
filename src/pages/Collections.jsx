import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import silkImg from '../assets/collection-silk-final.jpg';
import chiffonImg from '../assets/collection-chiffon-new.jpg';
import linenImg from '../assets/collection-linen-new.jpg';
import organzaImg from '../assets/collection-organza.jpg';
import tusserImg from '../assets/collection-tusser-new.jpg';
import spunImg from '../assets/collection-spun.png';
import cottonImg from '../assets/collection-cotton.png';
import './Collections.css';

// Mock Data
const products = [
    { id: 1, category: "silk", image: silkImg }, // Used for Saree
    { id: 2, category: "chiffon", image: chiffonImg },
    { id: 3, category: "linen", image: linenImg },
    { id: 4, category: "organza", image: organzaImg },
    { id: 5, category: "tusser", image: tusserImg },
    { id: 6, category: "spun", image: spunImg },
    { id: 7, category: "cotton", image: cottonImg },
];

const FILTER_KEYS = ["all", "silk", "chiffon", "linen", "organza", "tusser", "spun", "cotton"];

const Collections = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredProducts = useMemo(() => {
        if (activeFilter === "all") {
            return products;
        }
        return products.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const handleFilterClick = (filterKey) => {
        setActiveFilter(filterKey);
        console.log("Filter set to:", filterKey); // Debugging
    };

    return (
        <div className="collections-page">
            <div className="container">
                <div className="page-header text-center">
                    <h5 className="page-subtitle">{t('collections.subtitle')}</h5>
                    <h1 className="page-title">{t('collections.title')}</h1>
                    <p className="page-desc">
                        {t('collections.desc')}
                    </p>
                </div>

                {/* Filters */}
                <div className="filters-container">
                    {FILTER_KEYS.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {t(`collections.filters.${filter}`)}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div
                                className="product-image"
                                style={{ aspectRatio: '4/5', height: 'auto' }}
                            >
                                <img
                                    src={product.image}
                                    alt={t(`collections.filters.${product.category}`)}
                                    className="product-img"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                />
                                {/* Overlay / Placeholder */}
                                <div className="hover-overlay">
                                    <span className="view-text">{t('collections.card.request')}</span>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{t(`collections.filters.${product.category}`)}</h3>
                                <p className="product-desc">{t(`collections.products.${product.category}Desc`)}</p>
                                <button className="btn-inquiry">{t('collections.card.inquiry')}</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Placeholder */}
                <div className="pagination">
                    <button disabled className="page-btn text-btn">Prev</button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn text-btn">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Collections;
