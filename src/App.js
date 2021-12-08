import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'
import Sale from './components/Sale'

import "./App.css";
import "./components/Home.css"
import "./components/NavigationBar.css"
import "./components/Footer.css"


// const Red = () => {
//     return (
//         <h1>RED!</h1>
//     )
// }

// const Blue = () => {
//     return (
//         <h1>BLUE!</h1>
//     )
// }

const App = () => {
    return (
        <div>
                {/* <div>
                    <p><Link to='/red'>Go to Red!</Link></p>
                    <p><Link to='/blue'>Go to Blue!</Link></p>
                    <p><Link to='/contactus'>Go to Contact!</Link></p>
                </div> */}

                <div>
                    <Navigation />
                    <Routes>
                        <Route path='/' exact element={<Home />}/>
                        <Route path='/aa/sale' element={<Sale />} />
                        <Route path='/aa/contactus' element={<Contact />} />
                        {/* <Route path='/red' element={<Red />} />
                        <Route path='/blue' element={<Blue />} /> */}
                    </Routes>
                    <Footer />
                </div>
        </div>
    )
}

export default App;
