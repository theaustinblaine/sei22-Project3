import React, { Component } from 'react';
import axios from 'axios'
// import {Link} from 'react-router-dom'

export default class Brands extends Component {

    state = {
        brands: []
    }

    componentDidMount() {
        axios.get(`/api/brands`)
            .then((res) => {
                this.setState({brands: res.data})
            })
    }

    render() {

        let brandsList = this.state.brands.map((brand) => {
            return (
                <div>{brand.name}</div>
            )
        })

        return (
        <div>
            {brandsList}
        </div>
        );
    }
}
