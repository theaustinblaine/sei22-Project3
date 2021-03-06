import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import ModelsList from './ModelsList.jsx'
import { Form, Label, Input, } from 'reactstrap';

export default class SingleBrand extends Component {

    state = {
        brand: {},
        isEditFormDisplayed: false,
        redirectToHome: false,
    }

    componentDidMount() {
        axios.get(`/api/brands/${this.props.match.params.brandId}`)
            .then((res) => {
                this.setState({brand: res.data})
            })
        this.getAllModels()
    }

    getAllModels() {
        axios.get('/api/models/')
            .then((res) => {
                this.setState({models: res.data})
            })
    }

    handleToggleEditForm = () => {
        this.setState((state) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }

    handleInputChange = (event) => {
        const copiedBrand = {...this.state.brand}
        copiedBrand[event.target.name] = event.target.value

        this.setState({brand: copiedBrand})
    }

    handleSubmitChanges = (event) => {
        event.preventDefault()

        axios.put(`/api/brands/${this.state.brand._id}`, this.state.brand)
            .then((res) => {
                this.setState({
                    brand: res.data,
                    isEditFormDisplayed: false
                })
            })
    }

    handleDeleteBrand = () => {
        axios.delete(`/api/brands/${this.state.brand._id}`)
            .then(() => {
                this.setState({redirectToHome: true})
            })
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to='/'/>
        }

        return (
            this.state.isEditFormDisplayed
            ? <Form onSubmit={this.handleSubmitChanges}>
                <Label htmlFor="brand-name">Brand Name</Label>
                <Input 
                    id="brand-name"
                    type="text"
                    name="name"
                    value={this.state.brand.name}
                    onChange={this.handleInputChange}
                />
                <Label htmlFor="image-link">Image Link</Label>
                <Input 
                    id="image-link"
                    type="text"
                    name="imageLink"
                    onChange={this.handleInputChange}
                    value={this.state.brand.imageLink}
                />
                <Input type="submit" value="Update Brand" />
            </Form>
            
            :<div>
                <img className="brand-image single-brand-image" src={this.state.brand.imageLink} alt={this.state.brand.name} />
                
                {
                    this.props.isAdminLogin
                    ?<div className="admin-buttons">
                        <button onClick={this.handleToggleEditForm}>Edit Brand</button>
                        <button onClick={this.handleDeleteBrand}>Delete Brand</button>
                    </div>
                    : null
                }

                <ModelsList 
                    brand={this.state.brand}
                    match={this.props.match}
                    isAdminLogin={this.props.isAdminLogin}
                />
            </div>
        );
    }
}
