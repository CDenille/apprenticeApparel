import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar-container">

            <ul className ="side-bar-ul">
                <Link to="/#">
                  <li><a>Men's Clothing</a></li>
                </Link>

                <Link to="/#">
                  <li><a>Women's Clothing</a></li>
                </Link>

                <Link to="/#">
                  <li><a>Jewelry</a></li>
                </Link>

                <Link to="/#">
                  <li><a>Electronics</a></li>
                </Link>

                <Link to="/#">
                  <li><a>Sale</a></li>
                </Link>
            </ul>
            
        </div>
    );
};

export default SideBar;