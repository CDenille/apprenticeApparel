import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'
import Sale from './components/Sale'
import Womens from './components/Womens'
import Admin from './components/Admin'
import SideBar from './components/SideBar';
import Men from './components/Men';
import Jewelry from './components/Jewelry';
import Electronics from './components/Electronics';
import WomenSingleView from './components/WomenSingleView';



import "./App.css";
import "./Home.css"
import "./Navigation.css"
import "./Footer.css"
import './SideBar.css'


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
            <div className ="app-ontainer">
                {/* <div>
                    <h1>Hi there!!!!</h1>
                    <p>How are you??</p>
                    <p>This is a test!!</p>
                    <p>Denille is here</p>
                    <p><Link to='/red'>Go to Red!</Link></p>
                    <p><Link to='/blue'>Go to Blue!</Link></p>
                    <p><Link to='/contactus'>Go to Contact!</Link></p>
                </div> */}
                <div className="side-bar-container">
                  <SideBar />
                </div>
                
                <div className="components-container">
                    <Routes>
                        <Route path='/' exact element={<Home />}/>
                        <Route path='/red' element={<Red />} />
                        <Route path='/blue' element={<Blue />} />
                        <Route path='/contactus' element={<Contact />} />
                        <Route path='/aa/sale' element={<Sale />} />
                        <Route path='/contactus' element={<Contact />} />
                        <Route path='/womens' element={<Womens />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/mens' element={<Men />} />
                        <Route path='/jewelry' element={<Jewelry />} />
                        <Route path='/electronics' element={<Electronics />} />
                        <Route exact path='/womens/:id' element={<WomenSingleView />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;
