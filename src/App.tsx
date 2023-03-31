import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from 'styled-components';
import ProductsList from './components/Products/ProductsList';
import Cart from "./components/Cart/Cart";
import Header from './components/Header/Header';
import "./index.css";
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';

// Container Style
const Container = styled.div`
max-width: 1200px;
width: 80%;
margin: 0 auto; 
`

function App() {
  return (
    <>
    <Container>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductsList/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Container>
    </>
  );
}

export default App;
