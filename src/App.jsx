import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="w-full">
      <ToastContainer autoClose={3000} limit={2}/>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
