import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Home from './components/Home';
import Sale from './components/Sale';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Womens from './components/Womens'
import Admin from './components/Admin'
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
                        <Route path='/aa/sale' element={<Sale />} />
                        <Route path='/contactus' element={<Contact />} />
                        <Route path='/womens' element={<Womens />} />
                        <Route path='/' element={<Admin itemsFunction={items}/>} />
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
