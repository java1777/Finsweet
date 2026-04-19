import Navbar from "./components/Navbar/navbar"
import Hero from "./components/Hero/hero"
import About from "./components/About/about"

export default function App() {
    return (
        <div className="bg-[#1e1e2e] min-h-screen">
            <Navbar />
            <Hero />
            <About/>
        </div>
    )
}