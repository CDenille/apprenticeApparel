import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel, Figure } from 'react-bootstrap';
import axios from 'axios'
import './UpdateItem.css'

class UpdateItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            updatedItem: []
        }

    }
    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/adminView/:id")
        .then(response => {
            console.log("response", response)
            let data = []
            for(let i = 0; i<response.data.updatedItem.length; i++){
                data.push(response.data.updatedItem[i])
            }

            console.log("data", updatedItem)
            this.setState({updatedItem: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        console.log("state here", this.state.updatedItem)
        return (
            <><div className="item-header">Update Item: updatedItem[0].title</div>
            <div className="item-container">

                {this.state.updatedItem.map(item => {
                    return <div key={item.id} className="image-container">
                        <img src={item.image} className="image" />
                        <p class="title">{item.title} </p>
                        <p class="description">{item.description}</p>
                        <p class="price">${item.price} </p>
                        <p class="sale"p>Sale: {item.sale} </p>
                        <Button className="button">Submit Update</Button>

                    </div>;
                })}
            </div></>
        );
    }
}    
export default UpdatemItem;