import React from 'react';
import "./App.css";
import "./Footer.css"
import { Routes, Route, Link } from 'react-router-dom';
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
                </div>

                <div>
                    <Routes>
                        <Route path='/red' element={<Red />} />
                        <Route path='/blue' element={<Blue />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;
