import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar-container">

            <ul className ="side-bar-ul">
                <Link to="/mens">
                  <li><a>Men's Clothing</a></li>
                </Link>

                <Link to="/womens">
                  <li><a>Women's Clothing</a></li>
                </Link>

                <Link to="/jewelry">
                  <li><a>Jewelry</a></li>
                </Link>

                <Link to="/electronics">
                  <li><a>Electronics</a></li>
                </Link>

                <Link to="/sale">
                  <li><a>Sale</a></li>
                </Link>
            </ul>
            
        </div>
    );
};

export default SideBar;