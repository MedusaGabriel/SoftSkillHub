import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Home from "../src/pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Pratica from "./pages/pratica/Pratica";
import Habilidades from "./pages/habilidades/Habilidades";
import Perfil from "./pages/perfil/Perfil";  
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
          <Route path="/pratica" element={<Pratica />} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
