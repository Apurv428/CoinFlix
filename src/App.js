import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPgStocks from "./Pages/Stocks/News/NewsPg";
import SearchPgStock from "./Pages/Stocks/SearchPage/SearchPg";
import LandingPg from "./Pages/LandingPage/LandingPg";
import SearchPgCrypto from "./Pages/Crypto/SearchPage/SearchPg"
import Dashboard from "./Pages/Stocks/Dashboard/Dashboard";
import ContactPgStocks from "./Pages/Stocks/ContactPage/ContactPg"
import AboutPgStocks from "./Pages/Stocks/About/AboutPg"
import CryptoDashboard from "./Pages/Crypto/Dashboard/Dashboard";
import NewsPgCrypto from "./Pages/Crypto/News/NewsPg"
import ContactPgCrypto from "./Pages/Crypto/ContactPage/ContactPg"
import AboutPgCrypto from "./Pages/Crypto/About/AboutPg"
const App = () => {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<LandingPg />} />
            <Route path="stocks" element={<Dashboard />} />
            <Route path="stocks/news" element={<NewsPgStocks />} />
            <Route path="stocks/search" element={<SearchPgStock />} />
            <Route path="stocks/contact" element={<ContactPgStocks/>} />
            <Route path="stocks/about" element={<AboutPgStocks/>}/>
            <Route path="crypto" element={<CryptoDashboard/>} />
            <Route path="crypto/news" element={<NewsPgCrypto />} />
            <Route path="crypto/search" element={<SearchPgCrypto />} />            
            <Route path="crypto/contact" element={<ContactPgCrypto/>} />
            <Route path="crypto/about" element={<AboutPgCrypto/>}/>
          </Routes>
      </div>
    </Router>
  );
};

export default App;