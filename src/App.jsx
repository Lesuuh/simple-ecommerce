import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

function App() {
  return (
    <>
      <div className="w-full">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
