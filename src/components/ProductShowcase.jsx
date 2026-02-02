import { useEffect, useRef, useCallback, useState } from 'react'
import { gsap } from 'gsap'

const DEFAULT_GLOW_COLOR = '122, 231, 199'
const MOBILE_BREAKPOINT = 768

const createParticleElement = (x, y, color) => {
    const el = document.createElement('div')
    el.className = 'bento-particle'
    el.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(${color}, 1);
        box-shadow: 0 0 6px rgba(${color}, 0.6);
        pointer-events: none;
        z-index: 100;
        left: ${x}px;
        top: ${y}px;
    `
    return el
}

const ProductCard = ({
    product,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    enableMagnetism = true,
    enableParticles = true,
    disableAnimations = false
}) => {
    const cardRef = useRef(null)
    const particlesRef = useRef([])
    const timeoutsRef = useRef([])
    const isHoveredRef = useRef(false)
    const magnetismAnimationRef = useRef(null)

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout)
        timeoutsRef.current = []
        magnetismAnimationRef.current?.kill()

        particlesRef.current.forEach(particle => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => particle.parentNode?.removeChild(particle)
            })
        })
        particlesRef.current = []
    }, [])

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current || !enableParticles) return

        const { width, height } = cardRef.current.getBoundingClientRect()

        for (let i = 0; i < 8; i++) {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return

                const particle = createParticleElement(
                    Math.random() * width,
                    Math.random() * height,
                    glowColor
                )
                cardRef.current.appendChild(particle)
                particlesRef.current.push(particle)

                gsap.fromTo(particle,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
                )

                gsap.to(particle, {
                    x: (Math.random() - 0.5) * 80,
                    y: (Math.random() - 0.5) * 80,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                })

                gsap.to(particle, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                })
            }, i * 100)

            timeoutsRef.current.push(timeoutId)
        }
    }, [enableParticles, glowColor])

    useEffect(() => {
        if (disableAnimations || !cardRef.current) return

        const element = cardRef.current

        const handleMouseEnter = () => {
            isHoveredRef.current = true
            animateParticles()

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 3,
                    rotateY: 3,
                    duration: 0.3,
                    ease: 'power2.out',
                    transformPerspective: 1000
                })
            }
        }

        const handleMouseLeave = () => {
            isHoveredRef.current = false
            clearAllParticles()

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }

            if (enableMagnetism) {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }

            // Reset glow
            element.style.setProperty('--glow-intensity', '0')
        }

        const handleMouseMove = e => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2

            // Update glow position
            const relativeX = (x / rect.width) * 100
            const relativeY = (y / rect.height) * 100
            element.style.setProperty('--glow-x', `${relativeX}%`)
            element.style.setProperty('--glow-y', `${relativeY}%`)
            element.style.setProperty('--glow-intensity', '1')

            if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -8
                const rotateY = ((x - centerX) / centerX) * 8

                gsap.to(element, {
                    rotateX,
                    rotateY,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000
                })
            }

            if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.03
                const magnetY = (y - centerY) * 0.03

                magnetismAnimationRef.current = gsap.to(element, {
                    x: magnetX,
                    y: magnetY,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }
        }

        const handleClick = e => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height)
            )

            const ripple = document.createElement('div')
            ripple.style.cssText = `
                position: absolute;
                width: ${maxDistance * 2}px;
                height: ${maxDistance * 2}px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                left: ${x - maxDistance}px;
                top: ${y - maxDistance}px;
                pointer-events: none;
                z-index: 1000;
            `

            element.appendChild(ripple)

            gsap.fromTo(ripple,
                { scale: 0, opacity: 1 },
                {
                    scale: 1,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                }
            )
        }

        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('click', handleClick)

        return () => {
            isHoveredRef.current = false
            element.removeEventListener('mouseenter', handleMouseEnter)
            element.removeEventListener('mouseleave', handleMouseLeave)
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('click', handleClick)
            clearAllParticles()
        }
    }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, glowColor])

    const CheckIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12l5 5L20 7" />
        </svg>
    )

    return (
        <div
            ref={cardRef}
            className={`product-card product-card--bento ${product.featured ? 'featured' : ''}`}
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
                Start Now
            </a>
        </div>
    )
}

const ProductShowcase = () => {
    const sectionRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

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
                        <ProductCard
                            key={product.id}
                            product={product}
                            glowColor="122, 231, 199"
                            enableTilt={true}
                            enableMagnetism={true}
                            enableParticles={true}
                            disableAnimations={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase
