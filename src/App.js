import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'
import Sale from './components/Sale'
import Womens from './components/Womens'
import Admin from './components/Admin'



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
                </div>

                <div>
                    <Routes>
                        <Route path='/home' exact element={<Home />}/>
                        <Route path='/red' element={<Red />} />
                        <Route path='/blue' element={<Blue />} />
                        <Route path='/' element={<Contact />} />
                        <Route path='/aa/sale' element={<Sale />} />
                        <Route path='/contactus' element={<Contact />} />
                        <Route path='/womens' element={<Womens />} />
                        <Route path='/admin' element={<Admin />} />

                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;
