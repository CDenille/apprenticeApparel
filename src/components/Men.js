import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios'
import{Link, Redirect} from 'react-router-dom';
import './Womens.css'

class Men extends Component {
    constructor(props){
        super(props);
        this.state = {
            mens: []
        }

    }
    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/mens")
        .then(response => {
            console.log("response", response)
            let data = []
            for(let i = 0; i<response.data.mens.length; i++){
                data.push(response.data.mens[i])
            }

            console.log("data", data)
            this.setState({mens: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        console.log("state here", this.state.mens)
        return (
            
           
            <div className="womensClothing-container">
                <h1 className="womens-header">Men's Clothing</h1>
            
                
                {this.state.mens.map(men => {
                    return <div key = {men.id} className="image-p-container">
                             <Link className="imageLink" to={`/aa/mens/${men.id}`}> 
                             <img src={men.image} />
                             </Link>
                             <p>{men.title}</p>
                             <p>{men.descripton}</p>
                             <p>${men.price} </p>
                             <Button className="button" >Add to Cart</Button> 
                             
                          </div>
                })}
                
            </div>
        );
    }
}    

export default Men;