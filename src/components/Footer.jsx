import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <img src="/reyou-logo.png" alt="ReYouth" />
                                <span>ReYouth</span>
                            </Link>
                            <p className="footer-tagline">
                                Redefine your biological age with science-backed longevity solutions.
                                Your journey to younger, healthier you starts here.
                            </p>
                            <div className="footer-badges">
                                <div className="footer-badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    <span>Science-Backed</span>
                                </div>
                                <div className="footer-badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <span>Personalized Care</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="footer-links-section">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#programs">Programs</a></li>
                                <li><Link to="/about">About Founder</Link></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="footer-contact-section">
                            <h4 className="footer-heading">Get In Touch</h4>
                            <div className="footer-contact-list">
                                <a href="mailto:reyouthcompany@gmail.com" className="footer-contact-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                    <span>reyouthcompany@gmail.com</span>
                                </a>
                            </div>
                            <div className="footer-social">
                                <a
                                    href="https://www.instagram.com/reyouthcompany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Instagram @reyouthcompany"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/reyouth.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Instagram @reyouth.in"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/919296953926"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Chat on WhatsApp"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" strokeWidth="0" width="22" height="22">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* CTA Column */}
                        <div className="footer-cta-section">
                            <h4 className="footer-heading">Start Your Journey</h4>
                            <p className="footer-cta-text">
                                Ready to unlock your biological potential? Join thousands who've already started.
                            </p>
                            <a
                                href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary footer-cta-btn"
                            >
                                <span>Get Started Free</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} ReYouth. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <Link to="/terms">Terms & Conditions</Link>
                            <span className="footer-divider">•</span>
                            <a href="#privacy">Privacy Policy</a>
                        </div>
                        <div className="footer-bottom-accent">
                            <span className="footer-accent-dot"></span>
                            <span className="footer-made-with">Made with ❤️ for longevity</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
