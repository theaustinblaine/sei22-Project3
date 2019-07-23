import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'
import ModelsList from './ModelsList.jsx'

export default class SingleBrand extends Component {

    state = {
        brand: {},
        isEditFormDisplayed: false,
        redirectToHome: false,
    }

    componentDidMount() {
        Axios.get(`/api/brands/${this.props.match.params.brandId}`)
            .then((res) => {
                this.setState({brand: res.data})
            })
        this.getAllModels()
    }

    getAllModels() {
        Axios.get('/api/models/')
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

        Axios.put(`/api/brands/${this.state.brand._id}`, this.state.brand)
            .then((res) => {
                this.setState({
                    brand: res.data,
                    isEditFormDisplayed: false
                })
            })
    }

    handleDeleteBrand = () => {
        Axios.delete(`/api/brands/${this.state.brand._id}`)
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
            ? <form onSubmit={this.handleSubmitChanges}>
                <label htmlFor="brand-name">Brand Name</label>
                <input 
                    id="brand-name"
                    type="text"
                    name="name"
                    value={this.state.brand.name}
                    onChange={this.handleInputChange}
                />
                <button>Submit Changes</button>
            </form>
            :<div>
                <h1>{this.state.brand.name}</h1>
                <button onClick={this.handleToggleEditForm}>Edit Brand Name</button>
                <button onClick={this.handleDeleteBrand}>Delete Brand</button>
                <ModelsList 
                    brand={this.state.brand}
                />
            </div>
        );
    }
}
