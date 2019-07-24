import React, { Component } from 'react';
import axios from 'axios'
import NewBrandForm from './NewBrandForm.jsx'
import {Link} from 'react-router-dom'

export default class Brands extends Component {

    state = {
        brands: [],
        isAddNewFormDisplayed: false,
        newBrand: {
            name: ""
        }
    }

    componentDidMount() {
        this.getAllBrands()
    }

    getAllBrands = () => {
        axios.get(`/api/brands`)
            .then((res) => {
                this.setState({brands: res.data})
            })
    }

    handleClickAddNew = () => {
        this.setState((state) => {
            return {isAddNewFormDisplayed: !state.isAddNewFormDisplayed}
        })
    }

    handleInputChange = (event) => {
        const copiedNewBrand = {...this.state.newBrand}
        copiedNewBrand[event.target.name] = event.target.value

        this.setState({newBrand: copiedNewBrand})
    }

    handleAddNewForm = (event) => {
        event.preventDefault()

        axios.post('/api/brands', this.state.newBrand)
            .then(() => {
                this.setState({isAddNewFormDisplayed: false})
                this.getAllBrands()
            })
    }

    render() {

        let brandsList = this.state.brands.map((brand) => {
            return (
                <div key={brand._id}>
                    <Link 
                        key={brand._id}
                        to={`/brands/${brand._id}`}
                    >
                        {brand.name}
                    </Link>
                </div>
            )
        })

        return (
            this.state.isAddNewFormDisplayed
            ? <NewBrandForm 
                brands={this.state.brands}
                newBrand={this.state.newBrand}
                handleInputChange={this.handleInputChange}
                handleAddNewForm={this.handleAddNewForm}
            />
            : <div>
                {brandsList}
                <button onClick={this.handleClickAddNew} >Add New Brand</button>
            </div>
        );
    }
}
