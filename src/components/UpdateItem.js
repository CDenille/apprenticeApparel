import React, { Component, useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel, Figure } from 'react-bootstrap';
import axios from 'axios'
import './UpdateItem.css'
import{Link} from 'react-router-dom';

function UpdateItem(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchCart();
}, []);

    const fetchCart = async () => {
    const id = 2;
    const { data } = await axios.get(`/aa/adminView/${id}`);
    console.log(data)
    setCart(data);
}
    console.log(item)
    return (
        <div >
            <h1>Denille</h1>
        // {/* <Link to={`/aa/adminView/${props.item.id}`}> 
        //     <h1>{props.item.title}</h1>
        //  </Link> */}
        </div>

    )

}


// class UpdateItem extends Component {
//     constructor(props){
//         super(props);
//         // this.state = {
//         //     updatedItem: []
//         // }

//     }


    // componentDidMount = () => {
    //     axios.get("http://localhost:3000/aa/adminView/:id")
    //     .then(response => {
    //         console.log("response", response)
    //         let data = []
    //         for(let i = 0; i<response.data.updatedItem.length; i++){
    //             data.push(response.data.updatedItem[i])
    //         }

    //         console.log("data", updatedItem)
    //         this.setState({updatedItem: data})
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
    
    // render() {
    //     console.log("state here", this.state.updatedItem)
    //     return (
    //         <><div className="item-header">Update Item</div>
    //         <div className="item-container">

    //             {this.state.updatedItem.map(item => {
    //                 return <div key={item.id} className="image-container">
    //                     <img src={item.image} className="image" />
    //                     <p class="title">{item.title} </p>
    //                     <p class="description">{item.description}</p>
    //                     <p class="price">${item.price} </p>
    //                     <p class="sale"p>Sale: {item.sale} </p>
    //                     <Button className="button">Submit Update</Button>

    //                 </div>;
    //             })}
    //         </div></>
    //     );
    // }
//} 
export default UpdateItem;