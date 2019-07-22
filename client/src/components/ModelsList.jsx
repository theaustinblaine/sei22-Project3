import React, { Component } from 'react';
import Axios from 'axios'

export default class models extends Component {

    state = {
        models: []
    }

    componentDidMount() {
        this.getAllModels()
    }
    
    getAllModels() {
        Axios.get('/api/models/')
            .then((res) => {
                this.setState({models: res.data})
            })
    }

    render() {

        let modelsList = this.state.models.map((model) => {
            return  (
                <div>
                    <h3>{model.model} - {model.price}</h3>
                    
                    <p>{model.description}</p>
                </div>
            )
        })

        return (
        <div>
            {modelsList}
            <button>Add New Model</button>
        </div>
        );
    }
}
