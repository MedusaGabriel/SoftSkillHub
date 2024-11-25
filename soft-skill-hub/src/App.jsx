import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Home from "../src/pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Habilidades from "./pages/habilidades/Habilidades";  
import "./App.css";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <Router>
      <Header />
      <Modal  />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
