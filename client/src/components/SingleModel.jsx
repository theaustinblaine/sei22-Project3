import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'
import { Form, Label, Input, } from 'reactstrap';

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

        Axios.put(`/api/brands/${this.state.model.brandId}/models/${this.state.model._id}`, this.state.model)
            .then((res) => {
                this.setState({
                    model: res.data,
                    isEditFormDisplayed: false
                })
            })
    }

    handleDeleteModel = () => {
        Axios.delete(`/api/brands/${this.state.model.brandId}/models/${this.state.model._id}`)
            .then(() => {
                this.setState({redirectToHome: true})
            })
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to="/"/>
        }

        return (
            this.state.isEditFormDisplayed
            ? <Form onSubmit={this.handleSubmitChanges}>
                <Label htmlFor="model-name">Model: </Label>
                <Input 
                    id="model-name"
                    type="text"
                    name="model"
                    value={this.state.model.model}
                    onChange={this.handleInputChange}
                />
                <Label htmlFor="model-price">Price: </Label>
                <Input 
                    type="number" 
                    name="price" 
                    id="model-price" 
                    min="0" 
                    value={this.state.model.price}
                    onChange={this.handleInputChange}
                    />
                <Label htmlFor="image-link">Image Link:</Label>
                <Input 
                    id="image-link"
                    type="text"
                    name="imageLink"
                    value={this.state.model.imageLink}
                    onChange={this.handleInputChange}
                />
                <Label htmlFor="model-description">Product Description</Label>
                <Input
                    type="textarea"
                    name="description" 
                    id="model-description" 
                    cols="30" 
                    rows="10"
                    value={this.state.model.description}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Update Listing"/> 
            </Form>
            : <div className="single-model-component">
                <h1>{this.state.model.model}</h1> 
                <h3>${this.state.model.price}</h3>
                <img className="model-image" src={this.state.model.imageLink} alt={this.state.model.model} />
                <p>{this.state.model.description}</p>
                {
                this.props.isAdminLogin
                    ?<div className="admin-model-buttons">    
                        <button onClick={this.handleToggleEditForm}>Edit Listing</button>
                        <button onClick={this.handleDeleteModel}>Delete Listing</button>
                    </div>
                    :<button onClick={() => this.props.handleAddToCart(this.state.model)}>Add to Cart</button>
                }
        </div>
        );
    }
}
