
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header"
import Home from "./componentes/Home"
import About from "./componentes/About"
import Work from "./componentes/Work";
import Contact from "./componentes/Contact"
import Appdesign from "./componentes/Appdesign";
import Footer from "./componentes/Footer";

//styles link import
import "./styles/color.scss"
import "./styles/about.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/work.scss"
import "./styles/myproject.scss"
import "./styles/appdesign.scss"



function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appdesign" element={<Appdesign />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
