import React, { Component } from 'react';
import axios from 'axios'
import NewBrandForm from './NewBrandForm.jsx'
// import {Link} from 'react-router-dom'

export default class Brands extends Component {

    state = {
        brands: [],
        isAdminView: false,
        newBrand: {
            name: String
        }
    }

    componentDidMount() {
        axios.get(`/api/brands`)
            .then((res) => {
                this.setState({brands: res.data})
            })
    }

    handleClick = () => {
        this.setState((state) => {
            return {isAdminView: !state.isAdminView}
        })
    }

    render() {

        let brandsList = this.state.brands.map((brand) => {
            return (
                <div>{brand.name}</div>
            )
        })

        return (
            this.state.isAdminView
            ? <NewBrandForm 
                brands={this.state.brands}
                newBrand={this.state.newBrand}
            />
            : <div>
                {brandsList}
                <button onClick={this.handleClick} >Add New Brand</button>
            </div>
        );
    }
}
