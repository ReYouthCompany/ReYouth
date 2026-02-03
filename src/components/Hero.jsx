import { useState, useEffect } from 'react'
import ShinyText from './ShinyText'

const Hero = () => {
    const [bioAge, setBioAge] = useState(45)
    const [chronAge] = useState(40)
    const targetBioAge = 38

    useEffect(() => {
        const interval = setInterval(() => {
            setBioAge(prev => {
                if (prev > targetBioAge) {
                    return prev - 1
                }
                clearInterval(interval)
                return targetBioAge
            })
        }, 150)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hero-compact">
            {/* Background Effects */}
            <div className="hero-bg">
                <div className="grid-bg"></div>
                <div className="hero-glow hero-glow-1"></div>
                <div className="hero-glow hero-glow-2"></div>
            </div>

            <div className="container hero-content-compact">
                {/* Left Side - Text Content */}
                <div className="hero-text-side">
                    <div className="hero-badge">
                        <span>Book a Free Consultation now!</span>
                    </div>

                    <h1>
                        Reverse Your <ShinyText
                            text="Biological Clock"
                            speed={3}
                            delay={0.5}
                            color="#7AE7C7"
                            shineColor="#ffffff"
                            spread={90}
                            direction="left"
                            className="shiny-hero-text"
                        />
                    </h1>

                    <p className="hero-subtitle-compact">
                        Combine advanced health tracking with personalized care.
                        Through precision diagnostics and AI-driven analysis, we help you stay fitter and younger.
                    </p>

                    <div className="hero-cta-compact">
                        <a
                            href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Start Your Health Journey
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#programs" className="btn btn-secondary">
                            Explore Programs
                        </a>
                        <a
                            href="https://wa.me/919296953926"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            aria-label="Chat on WhatsApp"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>

                    <div className="hero-trust-compact">
                        <div className="trust-item">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 14.59l-3.29-3.3 1.41-1.41L11 13.76l4.88-4.88 1.42 1.41L11 16.59z" />
                            </svg>
                            <span>Protocols based on your body</span>
                        </div>
                        <div className="trust-item">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 12.18L3.55 10.5 12 5.82l8.45 4.68L12 15.18zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                            </svg>
                            <span>Health maintenance Guidance</span>
                        </div>
                        <div className="trust-item">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z" />
                            </svg>
                            <span>Secured Encrypted Health Data</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Age Counter */}
                <div className="hero-visual-side">
                    <div className="age-counter-compact">
                        <div className="age-box-compact">
                            <div className="age-value-compact">{chronAge}</div>
                            <div className="age-label-compact">Chronological Age</div>
                        </div>

                        <div className="age-arrow">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>

                        <div className="age-box-compact highlight">
                            <div className="age-value-compact">{bioAge}</div>
                            <div className="age-label-compact">Biological Age</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
