import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
        </>
    )
}