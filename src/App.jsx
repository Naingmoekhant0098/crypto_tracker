import React, { useEffect, useState } from "react";
import axios from "axios";
import { Galaxy } from "react-stars-particles";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Currency from "./Pages/Currency";
import Ft from "./Components/Ft";
import ScrollToTop from "./Components/ScrollToTop";
import Search from "./Pages/Search";

const App = () => {
  return (
    <div>
      <div className=" max-w-6xl mx-auto absolute top-0 left-0 right-0 bottom-0  z-50">
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/crypto_tracker" element={<Home />} />
          <Route path="/cryptocurrencies/:id" element={<Currency />} />
          <Route path="/search" element={<Search />}/>
        </Routes>
        <Ft />
      </div>
  
      <Galaxy quantity={100} attract={0.3} color="#f2f0ef" className=" z-30" />
    </div>
  );
};

export default App;
