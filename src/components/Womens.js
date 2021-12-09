import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios'
import './Womens.css'
import { Link } from 'react-router-dom';

class Womens extends Component {
    constructor(props){
        super(props);
        this.state = {
            womens: []
        }

    }
    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/womens")
        .then(response => {
            console.log("response", response)
            let data = []
            for(let i = 0; i<response.data.womens.length; i++){
                data.push(response.data.womens[i])
            }

            console.log("data", data)
            this.setState({womens: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        console.log("state here", this.state.womens)
        return (
            
           
            <div className="womensClothing-container">
                <h1 className="womens-header">Women's Clothing</h1>
            
                
                {this.state.womens.map(women => {
                    return <div key = {women.id} className="image-p-container"> 
                        
                            <Link to = {`/womens/${women.id}`}>
                             <img src={women.image} />
                             </Link>
                             <p>{women.title}</p>
                             <p>{women.descripton}</p>
                             <p>${women.price} </p>
                             <Button className="button" >Add to Cart</Button>
                             
                          </div>
                })}
                
            </div>
        );
    }
}    

export default Womens;