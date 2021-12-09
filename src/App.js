import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Home from './components/Home';
import Sale from './components/Sale';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Signup from './components/Signup'
import Login from './components/Login'
import Womens from './components/Womens'
import Admin from './components/Admin'
import SideBar from './components/SideBar';
import Men from './components/Men';
import Jewelry from './components/Jewelry';
import Electronics from './components/Electronics';
import UpdateItem from './components/UpdateItem'



import "./App.css";
import "./components/Home.css";
import "./components/NavigationBar.css";
import "./components/Footer.css";
import './components/SideBar.css';

const App = () => {
    return (
        <>
            <Navigation />
            <div className ="app-ontainer">
                <div className="side-bar-container">
                  <SideBar />
                </div>
                <div className="components-container">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/aa/sale' element={<Sale />} />
                        <Route path='/aa/login' element={<Sale />} />
                        <Route path='/aa/signup' element={<Sale />} />
                        <Route path='/contactus' element={<Contact />} />
                        <Route path='/womens' element={<Womens />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/mens' element={<Men />} />
                        <Route path='/jewelry' element={<Jewelry />} />
                        <Route path='/electronics' element={<Electronics />} />
                        <Route path='/aa/adminView/:id' element={<UpdateItem />} />
                        <Route path='aa/checkout/:id' element={<Cart />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
