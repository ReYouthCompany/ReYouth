import { useEffect, useRef } from 'react'
import TiltedCard from './TiltedCard'

const TechPillars = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-children')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const pillars = [
        {
            number: '01',
            title: 'Precision Diagnostics',
            description: 'Comprehensive blood panels 2-3 times annually',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M9 2h6v6h6v6h-6v6H9v-6H3V8h6V2z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'AI-Driven Analysis',
            description: 'Biological Age Velocity reports using advanced algorithms',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Strategic Action',
            description: 'Evidence-based nutritional protocols & lifestyle plans',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Expert Mentorship',
            description: 'Direct access to certified health professionals',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            number: '05',
            title: 'Digital Security',
            description: 'End-to-end encrypted vault for health records',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        }
    ]

    return (
        <section className="section pillars" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2>The <span className="text-accent">Five Pillars</span> of ReYouth</h2>
                    <p>
                        Our subscription is built on five fundamental pillars that ensure
                        comprehensive health optimization and long-term vitality.
                    </p>
                </div>

                <div className="pillars-grid stagger-children">
                    {pillars.map(pillar => (
                        <TiltedCard
                            key={pillar.number}
                            containerHeight="180px"
                            containerWidth="100%"
                            imageHeight="180px"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                        >
                            <div className="pillar-card-number">{pillar.number}</div>
                            <div className="pillar-card-icon">
                                {pillar.icon}
                            </div>
                            <h4 className="pillar-card-title">{pillar.title}</h4>
                            <p className="pillar-card-desc">{pillar.description}</p>
                        </TiltedCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechPillars
