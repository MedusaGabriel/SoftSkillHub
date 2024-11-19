import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <Router>
      <Header />
      <Modal  />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habilidades" element={<h1>Habilidades</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
