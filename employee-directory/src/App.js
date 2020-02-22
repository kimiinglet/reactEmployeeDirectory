import React from 'react';
import logo from './logo.svg';
import Header from "../src/components/Header";
import Table from "../src/components/Table";
import Footer from "../src/components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
