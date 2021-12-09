import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import Logo from '../../Logo.png';

import './NavigationBar.css';

const Navigation = () => {
    return (
        <nav>
            <Link to="/">
               <div className="logo"><img src = {Logo} /></div>
            </Link>

            <ul className ="nav-ul">
                <Link to="/aa/menu">
                  <li>Menu</li>
                </Link>

                <Link to="/aa/sale">
                  <li>Sale</li>
                </Link>

                <Link to="/aa/account">
                  <li>Account</li>
                </Link>

                <Link to="/aa/checkout/2">
                  <li className="cart-style"><FaCartPlus /></li>
                </Link>
            </ul>
            
        </nav>
    );
};

export default Navigation;