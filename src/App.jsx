import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Research from './sections/Research'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
    return (
        <div className="app">
            <div className="luxury-bg-container">
                <div className="luxury-orb orb-1"></div>
                <div className="luxury-orb orb-2"></div>
                <div className="luxury-orb orb-3"></div>
            </div>
            <Header />
            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Research />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
