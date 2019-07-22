import React, { Component } from 'react';
import Axios from 'axios';

export default class SingleBrand extends Component {

    state = {
        brand: {}
    }

    componentDidMount() {
        Axios.get(`/api/brands/${this.props.match.params.brandId}`)
            .then((res) => {
                this.setState({brand: res.data})
            })
    }

    render() {
        return (
        <div>
            <h1>{this.state.brand.name}</h1>
        </div>
        );
    }
}
