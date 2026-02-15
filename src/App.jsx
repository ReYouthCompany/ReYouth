import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Aurora from './components/Aurora'
import { ThemeProvider } from './context/ThemeContext'

function App() {
    return (
        <ThemeProvider>
            <div className="app">
                {/* Aurora WebGL Background */}
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
                    <Aurora
                        colorStops={["#5227FF", "#7cff67", "#5227FF"]}
                        amplitude={0.3}
                        blend={0.65}
                    />
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
        </ThemeProvider>
    )
}

export default App
