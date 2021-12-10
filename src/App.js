import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Home from './components/Home';
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
import WomenSingleView from './components/WomenSingleView';
import MenSingleView from './components/MenSingleView';
import JewelrySingleView from './components/JewelrySingleView';
import ElectronicSingleView from './components/ElectronicSingleView';
import Sale from './components/Sale';



import "./App.css";
import "./components/Home.css";
import "./components/NavigationBar.css";
import "./components/Footer.css";
import './components/SideBar.css';
import "./components/WomenSingleView.css"

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
                    {/* <h1>Hi there!!!!</h1>
                    <p>How are you??</p>
                    <p>This is a test!!</p>
                    <p>Denille is here</p>
               
                </div>
                <div className="side-bar-container">
                  <SideBar />
                </div>
                
                <div className="components-container">
                    <Routes>

                        <Route path='/' exact element={<Home />}/>
                        <Route path='/home' exact element={<Home />}/>
                        <Route path='/sale' exact element={<Sale />} />
                        <Route path='/login' exact  element={<Login />} />
                        <Route path='/signup' exact element={<Signup />} />
                        <Route path='/contactus' element={<Contact />} />
                        <Route path='/womens' element={<Womens />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/mens' element={<Men />} />
                        <Route path='/jewelry' element={<Jewelry />} />
                        <Route path='/electronics' element={<Electronics />} />
                        <Route path='/adminView/:id' element={<UpdateItem item={item} />} />
                        <Route path='/checkout/:id' element={<Cart />} />
                        
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
