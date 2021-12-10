import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
    <div className="parent-container">
        <div className="categories-container">
            <div className="image-p-container">
                <Link to = "/womens">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHOZVsVGQ20haWz2tRnd9XFcQjCaqd2U-yw&usqp=CAU"/>
                </Link>
                <p>Womens' Clothing</p>
            </div>

            <div className="image-p-container">
                <Link to = "/mens">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9yaWmhPBpYjGmBgiMsmJ3aH8in6l2bt8dw&usqp=CAU"/>
                </Link>
                <p>Mens' Clothing</p>
            </div>

            <div className="image-p-container">
                <Link to ="/jewelry">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn28fkE8tvKTO3GSECITrz0o-8odHUW06CfQ&usqp=CAU"/>
                </Link>
                <p>Jewelry</p>
            </div>

            <div className="image-p-container">
                <Link to = "/electronics">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFd_j9oy5lISGCmO4bam9F0701FzIVmleug&usqp=CAU"/>
                </Link>
                <p>Electronics</p>
            </div>
        </div>
    </div>
    )
}

export default Home;
