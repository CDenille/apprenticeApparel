import React, { Component, useState, useEffect } from 'react';
import { Card, Button, Container, Label, Form, FloatingLabel} from 'react-bootstrap';
import axios from 'axios'
import './UpdateItem.css'
import{Link, useParams} from 'react-router-dom';

const submit = (event) => {
    event.preventDefault();
    const form = {
        title: title,
        description: description,
        price: price,
        onSale: onSale
    }
    console.log('myForm: ', updateForm)
    axios.put('/aa/updateSubmit', {
        updateForm: form
    })
}

function UpdateItem(props) {
    const {id} = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchCart();
}, [id]);

    const fetchCart = async () => {
    // const {id} = await props.match.params;
    console.log("This is my id", {id})
    const { data } = await axios.get(`/aa/adminView/${id}`);
    console.log(data)
    setItems(data);
}
    console.log(items)
    if (!items) {
        return <h4>Loading...</h4>
    }else {
        console.log("My item", items)

    
    return (
        <div class = "container">
            <img src={items.image} className ="singleItemImage"/>
            <p></p>
            <Form  onClick={submit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={items.title} 
                        className="mb-3">
                        <Form.Control type="title" placeholder="title" onChange={e=>setTitle(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={items.description} 
                        className="mb-3">
                        <Form.Control type="description" placeholder={items.description} onChange={e=>setDescription(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={items.price} 
                        className="mb-3">
                        <Form.Control type="price" placeholder={items.price} onChange={e=>setPrice(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Place on sale?" className="mb-3">
                        <Form.Control
                            type="onSale"
                            placeholder="Add item to sale?"
                            onChange={e=>setSale(e.target.value)}/>
                    </FloatingLabel>
                    <Button className="updateButton" type="submit">
                        Submit
                    </Button>
                </Form>
            {/* <img src={items.image} />
            <label for ="title">Title:</label><br>
            <input type="text" id="title" name="title"></input>
            <h1>{items.title}</h1>
            <p class="description">{items.description}</p>
            <p class="price">${items.price} </p>
            <p class="sale"p>Sale: {items.sale} </p> */}
        {/* // <Link to={`/aa/adminView/${props.item.id}`}> 
        //     <h1>{props.item.title}</h1>
        //  </Link> */}
        </div>

    )
}
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