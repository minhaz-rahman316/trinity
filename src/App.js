import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer/Footer";

import Aboutpage from "./components/pages/about/Aboutpage";
import Contactpage from "./components/pages/contact/Contact";
import Homepage from "./components/pages/home/Homepage";
import Productpage from "./components/pages/product/Productpage";
import Testimonials from "./components/pages/testimonial/Testimonials";
import ProductDesc from "./components/pages/productpage/ProductDesc";

function App() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/productsdesc" element={<ProductDesc/>} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="/contact" element={<Contactpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
