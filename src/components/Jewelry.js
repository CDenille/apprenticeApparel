import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios'
import{Link, Redirect} from 'react-router-dom';
import './Womens.css'

class Jewelry extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }

    }
    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/jewelry")
        .then(response => {
            console.log("HERE Me response", response)
            let data = []
            for(let i = 0; i<response.data.jewelry.length; i++){
                data.push(response.data.jewelry[i])
            }

            console.log("data", data)
            this.setState({list: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        //console.log("state here", this.state.jewelry)
        return (
            
           
            <div className="womensClothing-container">
                <h1 className="womens-header">Jewelry</h1>
            
                
                {this.state.list.map(elem => {
                    return <div key = {elem.id} className="image-p-container">
                            <Link className="imageLink" to={`/aa/jewelry/${elem.id}`}> 
                             <img src={elem.image} />
                             </Link>
                             <p>{elem.title}</p>
                             <p>{elem.descripton}</p>
                             <p>${elem.price} </p>
                             <Button className="button" >Add to Cart</Button> 
                             
                          </div>
                })}
                
            </div>
        );
    }
}    

export default Jewelry;