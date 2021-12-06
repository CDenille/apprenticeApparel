import React from 'react';
import "./App.css";
import "./Footer.css"
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
            <div>
                <div>
                    <h1>Hi there!!!!</h1>
                    <p>How are you??</p>
                    <p>This is a test!!</p>
                    <p>Denille is here</p>
                    <p><Link to='/red'>Go to Red!</Link></p>
                    <p><Link to='/blue'>Go to Blue!</Link></p>
                    <p><Link to='/contacts'>Go to Contact!</Link></p>
                </div>

                <div>
                    <Routes>
                        <Route path='/red' element={<Red />} />
                        <Route path='/blue' element={<Blue />} />
                        <Route path='/contacts' element={<Contact />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;
