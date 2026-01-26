import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import silkImg from '../assets/collection-silk.png';
import chiffonImg from '../assets/collection-chiffon.png';
import linenImg from '../assets/collection-linen.png';
import organzaImg from '../assets/collection-organza.png';
import tusserImg from '../assets/collection-tusser.png';
import spunImg from '../assets/collection-spun.png';
import cottonImg from '../assets/collection-cotton.png';
import './Collections.css';

// Mock Data
const products = [
    { id: 1, name: "Silk", category: "silk", desc: "Gold zari work on pure silk.", image: silkImg },
    { id: 2, name: "Chiffon", category: "chiffon", desc: "Lightweight hand-painted flora.", image: chiffonImg },
    { id: 3, name: "Linen", category: "linen", desc: "Breathable pure linen fabric.", image: linenImg },
    { id: 4, name: "Organza", category: "organza", desc: "Subtle silver embroidery.", image: organzaImg },
    { id: 5, name: "Tusser", category: "tusser", desc: "Rich textured wild silk.", image: tusserImg },
    { id: 6, name: "Spun", category: "spun", desc: "Soft spun blend for daily wear.", image: spunImg },
    { id: 7, name: "Cotton", category: "cotton", desc: "Traditional handloom cotton.", image: cottonImg },
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
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-img" />
                                {/* Overlay / Placeholder */}
                                <div className="hover-overlay">
                                    <span className="view-text">{t('collections.card.request')}</span>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-desc">{product.desc}</p>
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
