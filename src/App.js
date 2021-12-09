import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'
import Sale from './components/Sale'
import Signup from './components/Signup'
import Login from './components/Login'

import "./App.css";
import "./Home.css"
import "./Navigation.css"
import "./Footer.css"


const Red = () => {
    return (
        <h1>RED!</h1>
    )
}

const Blue = () => {
    return (
        <h1>BLUE!</h1>
    )
}

const App = () => {
    return (
        <div>
            <Navigation />
            <div>
                <div>
                    <h1>Hi there!!!!</h1>
                    <p>How are you??</p>
                    <p>This is a test!!</p>
                    <p>Denille is here</p>
                    <p><Link to='/red'>Go to Red!</Link></p>
                    <p><Link to='/blue'>Go to Blue!</Link></p>
                    <p><Link to='/contactus'>Go to Contact!</Link></p>
                    <p><Link to='/aa/sale'>Sale!</Link></p>
                    <p><Link to='/aa/login'>Login!</Link></p>
                    <p><Link to='/aa/signup'>Signup!</Link></p>
                </div>

                <div>
                    <Routes>
                        <Route path='/' exact element={<Home />}/>
                        <Route path='/red' exact element={<Red />} />
                        <Route path='/blue' exact element={<Blue />} />
                        {/* <Route path='/' element={<Contact />} /> */}
                        <Route path='/aa/sale' exact element={<Sale />} />
                        <Route path='/aa/signup' exact element={<Signup />} />
                        <Route path='/aa/login' exact element={<Login />} />
                        <Route path='/contactus' element={<Contact />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;
