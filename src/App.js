import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Book from "./pages/Book";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic Routes */}
        <Route path="/product/:productID" element={<Product />} />
        <Route path="/book/:bookID" element={<Book />} />
      </Routes>
      <div>HEY THIS IS ROB'S NEW CODE</div>
    </div>
  );
}

export default App;
