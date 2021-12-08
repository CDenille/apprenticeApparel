import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }

    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/sale")
        .then(response => {
            console.log("response", response)
            let data = []
            console.log("data", data)
            for(let i = 0; i<response.data.categories.length; i++){
                data.push(response.data.categories[i])
            }
            this.setState({categories: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        console.log("state here", this.state.categories)
        return (
           
            <div className="categories-container">
                
                {this.state.categories.map(category => {
                    return <div key = {category.id} className="image-p-container"> 
                             <img src={category.image} />
                             <p>{category.name}</p>

                          </div>
                })}
                
            </div>
        );
    }
}

export default Home;

// import React from 'react'

// function NewUser() {

//     //use this function when you submit your form!
//     function handleSubmit(event) {
//         //google what this function does below: (hint: something about refreshing pages)
//         event.preventDefault()
//         try {
//             const response = await fetch(`http://localhost:3000/users`,{
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application.json'
//                 },
//                 body: JSON
//             })
//         }
//     }