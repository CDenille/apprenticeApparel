import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import Logo from '../../Logo.png'


const Navigation = () => {
    return (
        <nav>
            <Link to="Home">
               <div className="logo"><img src = {Logo} /></div>
            </Link>

            <ul className ="nav-ul">
                <Link to="/Menu">
                  <li>Menu</li>
                </Link>

                <Link to="/Sale">
                  <li>Sale</li>
                </Link>

                <Link to="/Account">
                  <li>Account</li>
                </Link>

                <Link to="/Cart">
                  <li className="cart-style"><FaCartPlus /></li>
                </Link>
            </ul>
            
        </nav>
    );
};

export default Navigation;