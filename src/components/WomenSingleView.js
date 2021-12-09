import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


const WomenSingleView = (props) => {
     console.log("my props", props)



    return (
        <div >
            <h1>Hiiii</h1>
            <h1>Hiiii</h1>
            <h1>Hiiii</h1>
            <h1>Hiiii</h1>
            <h1>Hiiii</h1>
            
            {/* <Link to = {`/womens/${props.women}`}>
              <img src={props.women.image} />
            </Link> */}
            
            {/* <p>{props.women.title}</p>
            <p>{props.women.descripton}</p>
            <p>${props.women.price} </p> */}
        </div>
    );
};

 export default WomenSingleView;