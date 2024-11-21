import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import Termsandcondi from "./components/Termsandcondi"; 
import Termsandco from "./components/Termsandco"; 
import Canandrefund from "./components/Canandrefund"; 
import JsonData from "./data/data.json";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <Footer />
              </>
            }
          />

          {/* About Us Full Page */}
          <Route
            path="/about"
            element={<About data={landingPageData.About} />}
          />
          <Route
            path="/termsandcondition"
            element={<Termsandcondi data={landingPageData.Termsandcondi} />}
          />
           <Route
            path="/privacyandpolicy"
            element={<Termsandco data={landingPageData.Termsandco} />}
          />
           <Route
            path="/cancellationandrefundpolicy"
            element={<Canandrefund data={landingPageData.Canandrefund} />}
          />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
