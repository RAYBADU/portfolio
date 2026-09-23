import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-slate-900">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
