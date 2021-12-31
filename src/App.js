import React from "react";
import './App.css';
import Header from "./Header";
import Portfolio from "./Portfolio";
import Services from './Services';
import Products from './Products';
import Footer from "./Footer";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
