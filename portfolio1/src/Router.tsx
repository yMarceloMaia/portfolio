import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

export function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </BrowserRouter>
    )
}