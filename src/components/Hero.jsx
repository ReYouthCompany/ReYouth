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
                        <span>Preventive Health-Tech</span>
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
                    </div>

                    <div className="hero-trust-compact">
                        <div className="trust-item">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 14.59l-3.29-3.3 1.41-1.41L11 13.76l4.88-4.88 1.42 1.41L11 16.59z" />
                            </svg>
                            <span>NASM Certified</span>
                        </div>
                        <div className="trust-item">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 12.18L3.55 10.5 12 5.82l8.45 4.68L12 15.18zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                            </svg>
                            <span>MSc Biotechnology</span>
                        </div>
                        <div className="trust-item">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z" />
                            </svg>
                            <span>Data Encrypted</span>
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
