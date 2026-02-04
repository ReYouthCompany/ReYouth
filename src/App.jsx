import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app">
            {/* Lightweight CSS Gradient Background */}
            <div className="ambient-background" aria-hidden="true">
                <div className="ambient-glow ambient-glow--primary"></div>
                <div className="ambient-glow ambient-glow--secondary"></div>
                <div className="ambient-grid"></div>
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
