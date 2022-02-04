import React from "react";
import './App.css';
import Header from "./Header";
import Portfolio from "./components/Portfolio";
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team.js';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Team />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
