import { useEffect, useRef, useState } from 'react'

const SocialProof = () => {
    const sectionRef = useRef(null)
    const [counters, setCounters] = useState({ clients: 0, biomarkers: 0, success: 0 })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')

                        // Start counter animation when metrics become visible
                        if (entry.target.classList.contains('metrics-row')) {
                            animateCounters()
                        }
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-children, .metrics-row')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const animateCounters = () => {
        const targets = { clients: 50, biomarkers: 50, success: 95 }
        const duration = 2000
        const steps = 60
        const stepDuration = duration / steps

        let currentStep = 0
        const interval = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            setCounters({
                clients: Math.floor(targets.clients * progress),
                biomarkers: Math.floor(targets.biomarkers * progress),
                success: Math.floor(targets.success * progress)
            })

            if (currentStep >= steps) {
                clearInterval(interval)
                setCounters(targets)
            }
        }, stepDuration)
    }

    const testimonials = [
        {
            content: "As a Gen Z professional, I always worried about my parents' health. ReYouth gave me the tools to actually do something about it. Their biological age tracking is incredible.",
            author: "Priya S.",
            role: "Product Manager, 26",
            initials: "PS"
        },
        {
            content: "The data-driven approach is what sold me. No guesswork, just science. My father's metabolic markers have improved significantly in just 6 months.",
            author: "Rahul M.",
            role: "Software Engineer, 28",
            initials: "RM"
        },
        {
            content: "I tried the Quick Detox before my wedding and the results were visible. Lost the bloat, skin was glowing. Highly recommend for anyone needing a quick reset.",
            author: "Ananya K.",
            role: "Marketing Lead, 24",
            initials: "AK"
        }
    ]

    return (
        <section className="section social-proof" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2>Trusted by <span className="text-accent">Health-Conscious</span> Individuals</h2>
                    <p>
                        Join hundreds who have taken control of their family's health with ReYouth's
                        preventive approach to longevity.
                    </p>
                </div>

                <div className="testimonials-grid stagger-children">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.initials}</div>
                                <div className="author-info">
                                    <h5>{testimonial.author}</h5>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="metrics-row reveal">
                    <div className="metric-item">
                        <div className="metric-value">{counters.clients}+</div>
                        <div className="metric-label">Happy Clients</div>
                    </div>
                    <div className="metric-item">
                        <div className="metric-value">{counters.biomarkers}+</div>
                        <div className="metric-label">Biomarkers Tracked</div>
                    </div>
                    <div className="metric-item">
                        <div className="metric-value">{counters.success}%</div>
                        <div className="metric-label">Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialProof
