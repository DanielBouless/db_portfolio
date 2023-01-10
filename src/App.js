import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './css/custom.css'
import StartPage from "./pages/StartPage";
import AccessProvider from "./context/annoying_captcha_success";

function App() {
  return (
    <AccessProvider>
      <NavigationBar />
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    </AccessProvider>
  );
}

export default App;
