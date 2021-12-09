import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Home from './components/Home';
import Sale from './components/Sale';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home'
import Sale from './components/Sale'
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
    const [item, setItem] = useState( )
    const items = (i) => {
        console.log("our item", i)
        setItem(i)
    }
    return (
        <>
            <Navigation />
            <div className ="app-ontainer">
                <div>
                    <h1>Hi there!!!!</h1>
                    <p>How are you??</p>
                    <p>This is a test!!</p>
                    <p>Denille is here</p>
                    <p><Link to='/red'>Go to Red!</Link></p>
                    <p><Link to='/blue'>Go to Blue!</Link></p>
                    <p><Link to='/contactus'>Go to Contact!</Link></p>
                   
                </div>
                <div className="side-bar-container">
                  <SideBar />
                </div>
                
                <div className="components-container">
                    <Routes>
                        <Route path='/' exact element={<Home />}/>
                        <Route path='/red' element={<Red />} />
                        <Route path='/blue' element={<Blue />} />
                        <Route path='/aa/sale' element={<Sale />} />
                        <Route path='/aa/login' element={<Sale />} />
                        <Route path='/aa/signup' element={<Sale />} />
                        <Route path='/contactus' element={<Contact />} />
                        <Route path='/womens' element={<Womens />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/mens' element={<Men />} />
                        <Route path='/jewelry' element={<Jewelry />} />
                        <Route path='/electronics' element={<Electronics />} />
                        <Route path='/aa/adminView/:id' element={<UpdateItem item={item} />} />
                        <Route path='aa/checkout/:id' element={<Cart />} />
                        
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
