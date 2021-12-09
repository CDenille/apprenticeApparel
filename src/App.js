import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Home from './components/Home';
import Sale from './components/Sale';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';

import "./App.css";
import "./components/NavigationBar.css"
import "./components/Home.css"
import "./components/Footer.css"

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='aa/sale' element={<Sale />} />
                <Route path='aa/contactus' element={<Contact />} />
                <Route path='aa/checkout/:id' element={<Cart />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;
