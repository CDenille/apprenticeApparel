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
        axios.get("http://localhost:3000/aa")
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