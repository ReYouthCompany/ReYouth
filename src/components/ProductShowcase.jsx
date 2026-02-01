import { useEffect, useRef } from 'react'

const ProductShowcase = () => {
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

    const products = [
        {
            id: 1,
            title: 'ReYou Aging & Lifestyle',
            subtitle: 'Systematic Health Plan (SHP)',
            description: 'Our flagship subscription offers a rigorous, data-driven approach to age management with high-frequency diagnostics.',
            features: [
                '2-3 diagnostic sessions per cycle',
                'Phenotypic vs Chronological Age analysis',
                'Custom diet & lifestyle protocols',
                'Encrypted health data vault',
                'Continuous biomarker tracking'
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <circle cx="12" cy="12" r="4" />
                </svg>
            ),
            featured: true
        },
        {
            id: 2,
            title: 'Healthy Weight Loss',
            subtitle: 'Metabolic Optimization',
            description: 'A precision fat-loss system designed for your body\'s unique chemistry, especially for Thyroid, PCOS, and Fatty Liver.',
            features: [
                'Data-driven diet plans',
                'Based on blood reports',
                '3-month transformation package',
                'Monthly subscription available',
                'Specialized metabolic protocols'
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M3 3v18h18" />
                    <path d="M7 16l4-4 4 4 6-6" />
                </svg>
            ),
            featured: false
        },
        {
            id: 3,
            title: 'Quick Body Detox',
            subtitle: 'Evidence-Based Reset',
            description: 'A hassle-free, scientifically backed program to flush toxins and reduce inflammation. Perfect for quick transformations.',
            features: [
                'No blood diagnostics needed',
                'Body & liver detox',
                'Anti-bloat water weight loss',
                'Clearer skin & natural glow',
                '1-week or 3-week options'
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
            ),
            featured: false
        }
    ]

    const CheckIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12l5 5L20 7" />
        </svg>
    )

    return (
        <section className="section products" id="programs" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2>Health Programs <span className="text-accent">Designed for Results</span></h2>
                    <p>
                        Choose the plan that fits your health goals. All programs are backed by science
                        and personalized to your unique biology.
                    </p>
                </div>

                <div className="products-grid stagger-children">
                    {products.map(product => (
                        <div
                            key={product.id}
                            className={`product-card ${product.featured ? 'featured' : ''}`}
                        >
                            <div className="product-icon">
                                {product.icon}
                            </div>

                            <h3>{product.title}</h3>
                            <p className="text-mono text-accent" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                                {product.subtitle}
                            </p>
                            <p>{product.description}</p>

                            <div className="product-features">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="product-feature">
                                        <CheckIcon />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${product.featured ? 'btn-primary' : 'btn-secondary'}`}
                                style={{ width: '100%' }}
                            >
                                {product.featured ? 'Start Now' : 'Learn More'}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase
