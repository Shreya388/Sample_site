import React from "react";
import './App.css';
import Header from "./Header";
import Portfolio from "./Portfolio";
import Services from './Services';
import Products from './Products';
import Team from './Team.js';
import Footer from "./Footer";
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
      
      <Footer />
    </div>
  );
}

export default App;
