import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const VideoSection = () => {
    const { t } = useLanguage();
    // Placeholder ID - User needs to update this
    const videoId = "Y5kL-U3FyLg";

    return (
        <section className="video-section-fixed" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>{t('video.title')}</h2>
                <div
                    className="video-wrapper-fixed"
                    style={{
                        position: 'relative',
                        width: '75%',
                        aspectRatio: '16/9',
                        margin: '0 auto',
                        background: '#000',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="Kasim Arts Documentary"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                        }}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
