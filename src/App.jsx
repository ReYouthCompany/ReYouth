import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy load PrismaticBurst to prevent blocking initial render
const PrismaticBurst = lazy(() => import('./components/PrismaticBurst'))

function App() {
    return (
        <div className="app">
            {/* PrismaticBurst Background */}
            <div className="prismatic-background">
                <Suspense fallback={null}>
                    <PrismaticBurst
                        animationType="rotate3d"
                        intensity={1.5}
                        speed={0.4}
                        distort={0}
                        paused={false}
                        offset={{ x: 0, y: 0 }}
                        hoverDampness={0.25}
                        rayCount={0}
                        mixBlendMode="normal"
                        colors={['#7AE7C7', '#0a1a15', '#000000']}
                    />
                </Suspense>
            </div>

            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
