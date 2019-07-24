import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'

export default class SingleModel extends Component {

    state = {
        model: {},
        redirectToHome: false,
        isEditFormDisplayed: false
    }

    componentDidMount() {
        Axios.get(`/api/brands/${this.props.match.params.brandId}/models/${this.props.match.params.modelId}`)
            .then((res) => {
                this.setState({model: res.data})
            })
    }

    handleToggleEditForm = () => {
        this.setState((state) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }

    handleInputChange = (event) => {
        const copiedModel = {...this.state.model}
        copiedModel[event.target.name] = event.target.value

        this.setState({model: copiedModel})
    }

    handleSubmitChanges = (event) => {
        event.preventDefault()

        Axios.put(`/api/models/${this.state.model._id}`, this.state.model)
            .then((res) => {
                this.setState({
                    model: res.data,
                    isEditFormDisplayed: false
                })
            })
    }

    handleDeleteModel = () => {
        Axios.delete(`/api/models/${this.state.model._id}`)
            .then(() => {
                this.setState({redirectToHome: true})
            })
    }

    handleAddToCart = () => {
        Axios.post('/api/cart', this.state.model)
            .then(() => {
                Axios.get('/api/cart')
                .then(() => {
                    console.log("Added to Cart")
                    })
            })
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to="/"/>
        }

        return (
            this.state.isEditFormDisplayed
            ? <form onSubmit={this.handleSubmitChanges}>
                <label htmlFor="model-name">Model: </label>
                <input 
                    id="model-name"
                    type="text"
                    name="model"
                    value={this.state.model.model}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="model-price">Price: </label>
                <input 
                    type="number" 
                    name="price" 
                    id="model-price" 
                    min="0" 
                    value={this.state.model.price}
                    onChange={this.handleInputChange}
                    />
                <label htmlFor="model-description">Product Description</label>
                <textarea 
                    name="description" 
                    id="model-description" 
                    cols="30" 
                    rows="10"
                    value={this.state.model.description}
                    onChange={this.handleInputChange}
                ></textarea>
                <input type="submit" value="Update Listing"/> 
            </form>
            : <div>
                <h2>{this.state.model.model}</h2> 
                <h3>${this.state.model.price}</h3>
                <p>{this.state.model.description}</p>
                <button onClick={this.handleToggleEditForm}>Edit Listing</button>
                <button onClick={this.handleDeleteModel}>Delete Listing</button>
                <button onClick={this.handleAddToCart}>Add to Cart</button>
            </div>
        );
    }
}
