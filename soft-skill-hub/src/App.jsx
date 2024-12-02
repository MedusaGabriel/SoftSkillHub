import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, } from "react-router-dom";
import { useEffect } from 'react';
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Home from "../src/pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Pratica from "./pages/pratica/Pratica";
import Habilidades from "./pages/habilidades/Habilidades";
import Sobre from "./pages/sobre/sobre";
import "./App.css";
import Modal from "./components/modal/login/Modal";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Modal />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pratica" element={<Pratica />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;