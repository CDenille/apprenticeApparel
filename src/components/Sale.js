import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            saleItems: []
        }

    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/sale")
        .then(response => {
            console.log("response", response)
            let data = []
            console.log("data", data)
            for(let i = 0; i<response.data.saleItems.length; i++){
                data.push(response.data.saleItems[i])
            }
            this.setState({saleItems: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        console.log("state here", this.state.saleItems)
        return (
           
            <div className="saleItems-container">
                
                {this.state.saleItems.map(saleItem => {
                    return <div key = {saleItem.id} className="image-p-container"> 
                             <img src={saleItem.image} />
                             <p>{saleItem.name}</p>

                          </div>
                })}
                
            </div>
        );
    }
}

export default Home;

