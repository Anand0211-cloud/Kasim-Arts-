import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { 
    FaGoogle, 
    FaInstagram, 
    FaFacebookF, 
    FaYoutube, 
    FaStar, 
    FaWhatsapp, 
    FaPhone, 
    FaEnvelope, 
    FaDownload, 
    FaShareNodes, 
    FaCopy, 
    FaCheck, 
    FaQrcode, 
    FaArrowUpRightFromSquare,
    FaMapLocationDot,
    FaXmark
} from 'react-icons/fa6';
import logo from '../assets/Logo.png';
import './Connect.css';

const PLATFORMS = [
    {
        id: 'google',
        title: 'Google Reviews',
        handle: 'KASIM ARTS (Varanasi)',
        description: 'Directly rate and write a 5-star review on Google',
        url: 'https://search.google.com/local/writereview?placeid=ChIJl6qq9j0ujjkR0zdhByN5IGQ',
        secondaryUrl: 'https://www.google.com/maps/place/KASIM+ARTS/@25.3256546,83.0180951,876m/data=!3m2!1e3!4b1!4m6!3m5!1s0x398e2e3df6aaaa97:0x64207923076137d3!8m2!3d25.3256546!4d83.0180951!16s%2Fg%2F11bw4m98rv',
        secondaryLabel: 'View on Maps',
        actionLabel: 'Write a Review on Google',
        icon: FaGoogle,
        accentColor: '#EA4335',
        badge: 'Recommended',
        featured: true,
        isReview: true
    },
    {
        id: 'instagram',
        title: 'Instagram',
        handle: '@kasim_arts',
        description: 'Explore our latest Banarasi collections, reels & craftsmanship',
        url: 'https://www.instagram.com/kasim_arts/',
        actionLabel: 'Follow on Instagram',
        icon: FaInstagram,
        accentColor: '#E1306C',
        badge: 'Latest Designs',
        featured: false
    },
    {
        id: 'facebook',
        title: 'Facebook',
        handle: 'kasimarts1885',
        description: 'Join our heritage textile community and updates',
        url: 'https://www.facebook.com/kasimarts1885',
        actionLabel: 'Connect on Facebook',
        icon: FaFacebookF,
        accentColor: '#1877F2',
        badge: 'Community',
        featured: false
    },
    {
        id: 'youtube',
        title: 'YouTube',
        handle: '@kasimarts1885',
        description: 'Watch authentic handloom weaving & artisan films',
        url: 'https://www.youtube.com/@kasimarts1885',
        actionLabel: 'Subscribe on YouTube',
        icon: FaYoutube,
        accentColor: '#FF0000',
        badge: 'Artisan Films',
        featured: false
    }
];

const Connect = () => {
    const [qrCodes, setQrCodes] = useState({});
    const [copiedId, setCopiedId] = useState(null);
    const [modalItem, setModalItem] = useState(null);
    const [sharedSuccess, setSharedSuccess] = useState(false);

    // Generate QR codes for all platforms
    useEffect(() => {
        let isMounted = true;
        const generateAllQRs = async () => {
            const qrMap = {};
            for (const item of PLATFORMS) {
                try {
                    const dataUrl = await QRCode.toDataURL(item.url, {
                        width: 480,
                        margin: 2,
                        color: {
                            dark: '#0A0A0A',
                            light: '#FFFFFF'
                        },
                        errorCorrectionLevel: 'H'
                    });
                    qrMap[item.id] = dataUrl;
                } catch (err) {
                    console.error('Failed to generate QR for', item.id, err);
                }
            }
            if (isMounted) setQrCodes(qrMap);
        };

        generateAllQRs();
        return () => { isMounted = false; };
    }, []);

    // Copy URL to clipboard
    const handleCopy = (id, url) => {
        navigator.clipboard.writeText(url).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2500);
        });
    };

    // Download QR Code image
    const handleDownloadQR = (id, title) => {
        const dataUrl = qrCodes[id];
        if (!dataUrl) return;
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `Kasim-Arts-${title.replace(/\s+/g, '-')}-QR.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Share the page
    const handleShare = async () => {
        const shareData = {
            title: 'Kasim Arts | Official Connect Hub',
            text: 'Connect with Kasim Arts — Follow our socials and write a Google review.',
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // User cancelled or share failed
            }
        } else {
            handleCopy('page-url', window.location.href);
            setSharedSuccess(true);
            setTimeout(() => setSharedSuccess(false), 2500);
        }
    };

    // Download vCard
    const handleDownloadVCard = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
N:Arts;Kasim;;;
FN:Kasim Arts
ORG:Kasim Arts Varanasi
TITLE:Banarasi Silk & Heritage Textile Manufacturers
TEL;TYPE=WORK,VOICE:+919278181550
EMAIL;TYPE=PREF,INTERNET:info@kasimarts.com
URL:https://kasimarts.com/card
ADR;TYPE=WORK:;;A.29/1-A-2, K.P. Bahadur Shaheed, Behind Bank of Baroda, Near Adampura Police Station, Pilikothi;Varanasi;Uttar Pradesh;221001;India
NOTE:Master artisans of pure Banarasi silk, sarees, brocades & fabrics since 1885.
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Kasim_Arts_Contact.vcf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="connect-page">
            {/* Background luxury gradient aura */}
            <div className="connect-aura"></div>

            <div className="container connect-container">
                {/* Brand Header */}
                <header className="connect-header">
                    <div className="connect-brand-lockup">
                        <img src={logo} alt="Kasim Arts" className="connect-exact-logo" />
                        <div className="connect-logo-text">
                            <span className="connect-brand-name">KASIM ARTS</span>
                            <span className="connect-brand-since">Since 1885</span>
                        </div>
                    </div>
                    <span className="connect-crest">Heritage Textile House • Varanasi</span>
                    <p className="connect-tagline">
                        Official Direct Links, QR Scanners & Reviews for our Business Card
                    </p>
                    <div className="connect-hint-pill">
                        <FaQrcode className="hint-icon" />
                        <span>Tap any button to open, or scan the QR code with a phone camera</span>
                    </div>
                </header>

                {/* Platforms Grid (Instagram, Facebook, YouTube, Google Review) */}
                <div className="connect-grid">
                    {PLATFORMS.map((item) => {
                        const Icon = item.icon;
                        const qrUrl = qrCodes[item.id];
                        const isCopied = copiedId === item.id;

                        return (
                            <div 
                                key={item.id} 
                                className={`connect-card ${item.featured ? 'featured-card' : ''} ${item.id}-card`}
                            >
                                {item.badge && (
                                    <div className="card-badge">
                                        {item.isReview && <FaStar className="star-icon" />}
                                        <span>{item.badge}</span>
                                    </div>
                                )}

                                <div className="card-header">
                                    <div className="platform-icon-wrap" style={{ '--accent-color': item.accentColor }}>
                                        <Icon className="platform-icon" />
                                    </div>
                                    <div className="platform-meta">
                                        <h2 className="platform-title">{item.title}</h2>
                                        <p className="platform-handle">{item.handle}</p>
                                    </div>
                                </div>

                                {item.isReview && (
                                    <div className="review-stars-banner">
                                        <div className="stars-row">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="star-gold" />
                                            ))}
                                        </div>
                                        <span className="stars-caption">Your review helps our artisans thrive</span>
                                    </div>
                                )}

                                <p className="card-description">{item.description}</p>

                                {/* QR Scanner Preview */}
                                <div className="qr-scanner-box">
                                    <div 
                                        className="qr-wrapper"
                                        onClick={() => qrUrl && setModalItem(item)}
                                        title="Click to view large QR code"
                                    >
                                        {qrUrl ? (
                                            <img 
                                                src={qrUrl} 
                                                alt={`${item.title} QR Scanner`} 
                                                className="qr-image" 
                                            />
                                        ) : (
                                            <div className="qr-placeholder">
                                                <FaQrcode className="qr-spin" />
                                                <span>Generating QR...</span>
                                            </div>
                                        )}
                                        <div className="qr-tap-overlay">
                                            <FaQrcode />
                                            <span>Enlarge</span>
                                        </div>
                                    </div>
                                    <span className="qr-scan-label">
                                        <span className="pulse-dot"></span>
                                        Scan with Phone Camera
                                    </span>
                                </div>

                                {/* Primary Action Button */}
                                <div className="card-actions">
                                    <a 
                                        href={item.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn-action-primary"
                                        style={{ '--brand-color': item.accentColor }}
                                    >
                                        <Icon className="btn-icon" />
                                        <span>{item.actionLabel}</span>
                                        <FaArrowUpRightFromSquare className="btn-external-icon" />
                                    </a>

                                    {item.secondaryUrl && (
                                        <a 
                                            href={item.secondaryUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn-action-secondary"
                                        >
                                            <FaMapLocationDot />
                                            <span>{item.secondaryLabel}</span>
                                        </a>
                                    )}

                                    {/* Action Utilities (Copy & Download QR) */}
                                    <div className="card-utility-bar">
                                        <button 
                                            type="button"
                                            className={`util-btn ${isCopied ? 'copied' : ''}`}
                                            onClick={() => handleCopy(item.id, item.url)}
                                            title="Copy direct link"
                                        >
                                            {isCopied ? (
                                                <>
                                                    <FaCheck className="util-icon text-success" />
                                                    <span>Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <FaCopy className="util-icon" />
                                                    <span>Copy Link</span>
                                                </>
                                            )}
                                        </button>

                                        <button 
                                            type="button"
                                            className="util-btn"
                                            onClick={() => handleDownloadQR(item.id, item.title)}
                                            title="Download QR code image for printing"
                                        >
                                            <FaDownload className="util-icon" />
                                            <span>Download QR</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Digital Business Card & Contact Quick Strip */}
                <div className="digital-card-section">
                    <div className="digital-card-header">
                        <h3>Digital Business Card</h3>
                        <p>Save Kasim Arts contact details or connect directly via WhatsApp, Call or Email</p>
                    </div>

                    <div className="quick-contact-row">
                        <a href="tel:+919278181550" className="quick-btn phone-btn">
                            <FaPhone />
                            <span>Call Us</span>
                        </a>

                        <a 
                            href="https://wa.me/919278181550?text=Hello%20Kasim%20Arts%2C%20I%20scanned%20your%20business%20card%20and%20would%20like%20to%20inquire%20about%20your%20fabrics."
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="quick-btn whatsapp-btn"
                        >
                            <FaWhatsapp />
                            <span>WhatsApp</span>
                        </a>

                        <a href="mailto:info@kasimarts.com" className="quick-btn email-btn">
                            <FaEnvelope />
                            <span>Email</span>
                        </a>

                        <button 
                            type="button" 
                            onClick={handleDownloadVCard} 
                            className="quick-btn vcard-btn"
                            title="Download contact card into phone address book"
                        >
                            <FaDownload />
                            <span>Save Contact (.vcf)</span>
                        </button>

                        <button 
                            type="button" 
                            onClick={handleShare} 
                            className="quick-btn share-btn"
                            title="Share this page"
                        >
                            <FaShareNodes />
                            <span>{sharedSuccess ? 'Link Copied!' : 'Share Page'}</span>
                        </button>
                    </div>

                    <div className="business-address-footer">
                        <FaMapLocationDot className="address-icon" />
                        <div>
                            <strong>Kasim Arts Headquarters</strong>
                            <p>A.29/1-A-2, K.P. Bahadur Shaheed, Behind Bank of Baroda, Near Adampura Police Station, Pilikothi, Varanasi, UP 221001, India</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large QR Modal for Presentations / In-Person Scanning */}
            {modalItem && (
                <div className="qr-modal-backdrop" onClick={() => setModalItem(null)}>
                    <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close-btn" 
                            onClick={() => setModalItem(null)}
                            aria-label="Close Modal"
                        >
                            <FaXmark />
                        </button>

                        <div className="modal-header">
                            <img src={logo} alt="Kasim Arts" className="modal-exact-logo" />
                            <h3 className="modal-title">{modalItem.title}</h3>
                            <p className="modal-handle">{modalItem.handle}</p>
                            <p className="modal-desc">{modalItem.description}</p>
                        </div>

                        <div className="modal-qr-frame">
                            <img 
                                src={qrCodes[modalItem.id]} 
                                alt={`${modalItem.title} QR`} 
                                className="modal-qr-img" 
                            />
                        </div>

                        <p className="modal-scan-text">
                            Scan with phone camera or QR scanner
                        </p>

                        <div className="modal-actions">
                            <a 
                                href={modalItem.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-action-primary"
                                style={{ '--brand-color': modalItem.accentColor }}
                            >
                                <span>{modalItem.actionLabel}</span>
                                <FaArrowUpRightFromSquare />
                            </a>

                            <button 
                                type="button" 
                                className="btn-modal-download"
                                onClick={() => handleDownloadQR(modalItem.id, modalItem.title)}
                            >
                                <FaDownload />
                                <span>Save QR for Printing</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Connect;
