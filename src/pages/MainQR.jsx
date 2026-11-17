import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode';
import { 
    FaDownload, 
    FaCopy, 
    FaCheck, 
    FaQrcode, 
    FaArrowUpRightFromSquare,
    FaWandMagicSparkles,
    FaCircleInfo
} from 'react-icons/fa6';
import logo from '../assets/Logo.png';
import './MainQR.css';

const DOMAIN = 'https://kasimarts.com';

const MainQR = () => {
    const [cardSlug, setCardSlug] = useState('card');
    const [withTracking, setWithTracking] = useState(false);
    const [qrDataUrl, setQrDataUrl] = useState('');
    const [copied, setCopied] = useState(false);

    // Compute live target URL that this QR code opens
    const targetUrl = `${DOMAIN}/${cardSlug}${withTracking ? '?src=business_card' : ''}`;

    // Generate high-resolution QR code dynamically whenever URL changes
    useEffect(() => {
        let isMounted = true;
        const generateQR = async () => {
            try {
                const dataUrl = await QRCode.toDataURL(targetUrl, {
                    width: 700,
                    margin: 2,
                    color: {
                        dark: '#0A0A0A',
                        light: '#FFFFFF'
                    },
                    errorCorrectionLevel: 'H'
                });
                if (isMounted) setQrDataUrl(dataUrl);
            } catch (err) {
                console.error('Failed to generate main QR:', err);
            }
        };

        generateQR();
        return () => { isMounted = false; };
    }, [targetUrl]);

    // Copy URL to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(targetUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    // Download Ultra High-Resolution PNG (300 DPI, 2400x2400px)
    const handleDownloadPNG = async () => {
        try {
            const highResUrl = await QRCode.toDataURL(targetUrl, {
                width: 2400,
                margin: 2,
                color: {
                    dark: '#0A0A0A',
                    light: '#FFFFFF'
                },
                errorCorrectionLevel: 'H'
            });
            const link = document.createElement('a');
            link.href = highResUrl;
            link.download = `Kasim-Arts-BusinessCard-QR-300DPI-${cardSlug}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error('Download PNG failed', err);
        }
    };

    // Download Vector SVG (Infinite scalability for print shops / designers)
    const handleDownloadSVG = async () => {
        try {
            const svgString = await QRCode.toString(targetUrl, {
                type: 'svg',
                margin: 2,
                color: {
                    dark: '#0A0A0A',
                    light: '#FFFFFF'
                },
                errorCorrectionLevel: 'H'
            });
            const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Kasim-Arts-BusinessCard-QR-Vector-${cardSlug}.svg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Download SVG failed', err);
        }
    };

    return (
        <div className="main-qr-page">
            {/* Subtle luxury gold aura in background */}
            <div className="main-qr-aura"></div>

            <div className="container main-qr-container">
                {/* Brand Header with Exact Header Logo */}
                <header className="main-qr-header">
                    <div className="main-qr-brand-lockup">
                        <img src={logo} alt="Kasim Arts" className="main-qr-exact-logo" />
                        <div className="main-qr-logo-text">
                            <span className="main-qr-brand-name">KASIM ARTS</span>
                            <span className="main-qr-brand-since">Since 1885</span>
                        </div>
                    </div>
                    <span className="main-qr-crest">Heritage Textile House • Varanasi</span>
                    <h1 className="main-qr-title">Business Card Master QR</h1>
                    <p className="main-qr-tagline">
                        This is the only QR code you need to print on your physical business cards.
                    </p>
                </header>

                {/* The Single Master QR Card */}
                <main className="main-qr-card">
                    <div className="main-qr-badge">
                        <FaWandMagicSparkles className="badge-sparkle" />
                        <span>Dynamic Master QR Code</span>
                    </div>

                    {/* QR Display Centerpiece */}
                    <div className="main-qr-centerpiece">
                        <div className="main-qr-frame">
                            {qrDataUrl ? (
                                <img 
                                    src={qrDataUrl} 
                                    alt="Kasim Arts Business Card QR" 
                                    className="main-qr-image" 
                                />
                            ) : (
                                <div className="main-qr-loading">
                                    <FaQrcode className="qr-spin" />
                                    <span>Generating QR...</span>
                                </div>
                            )}
                        </div>

                        <div className="main-qr-status">
                            <span className="pulse-dot"></span>
                            <span>Points dynamically to <strong>kasimarts.com/{cardSlug}</strong></span>
                        </div>
                    </div>

                    {/* Target URL Controls */}
                    <div className="main-qr-controls">
                        <div className="url-preview-pill">
                            <span className="url-label">Encoded Destination URL:</span>
                            <div className="url-address-bar">
                                <span className="url-protocol">https://</span>
                                <strong className="url-domain">kasimarts.com</strong>
                                <span className="url-slash">/</span>
                                <select 
                                    className="slug-selector"
                                    value={cardSlug}
                                    onChange={(e) => setCardSlug(e.target.value)}
                                    aria-label="Select destination slug"
                                >
                                    <option value="card">card</option>
                                    <option value="connect">connect</option>
                                </select>
                            </div>
                        </div>

                        <label className="analytics-checkbox">
                            <input 
                                type="checkbox"
                                checked={withTracking}
                                onChange={(e) => setWithTracking(e.target.checked)}
                            />
                            <span>Add scan tracker parameter (<code>?src=business_card</code>)</span>
                        </label>
                    </div>

                    {/* Print Download Action Buttons */}
                    <div className="main-qr-actions">
                        <button 
                            type="button" 
                            className="btn-main-download-png"
                            onClick={handleDownloadPNG}
                            title="Download 2400x2400px 300 DPI high-resolution PNG for printing"
                        >
                            <FaDownload className="btn-icon" />
                            <span>Download Print PNG (300 DPI)</span>
                        </button>

                        <button 
                            type="button" 
                            className="btn-main-download-svg"
                            onClick={handleDownloadSVG}
                            title="Download Vector SVG for print shops, CorelDraw, and Illustrator"
                        >
                            <FaDownload className="btn-icon" />
                            <span>Download Vector SVG</span>
                        </button>

                        <button 
                            type="button" 
                            className={`btn-main-copy ${copied ? 'copied' : ''}`}
                            onClick={handleCopy}
                            title="Copy destination URL to clipboard"
                        >
                            {copied ? (
                                <>
                                    <FaCheck className="btn-icon text-success" />
                                    <span>URL Copied!</span>
                                </>
                            ) : (
                                <>
                                    <FaCopy className="btn-icon" />
                                    <span>Copy URL</span>
                                </>
                            )}
                        </button>

                        <Link 
                            to={`/${cardSlug}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-main-preview"
                            title="Preview the page clients will see when they scan this QR code"
                        >
                            <span>Preview Destination Page</span>
                            <FaArrowUpRightFromSquare className="btn-icon" />
                        </Link>
                    </div>

                    {/* Dynamic Guarantee Note */}
                    <div className="main-qr-info-note">
                        <FaCircleInfo className="note-icon" />
                        <div>
                            <strong>Why this QR is 100% Dynamic:</strong>
                            <p>
                                Because this code links to your website at <code>kasimarts.com/{cardSlug}</code>, your printed business cards will <em>never</em> become outdated. Whenever you update social media links, change phone numbers, add new catalogs, or update your Google review link on the website in the future, your printed cards will automatically direct clients to your latest information!
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainQR;
