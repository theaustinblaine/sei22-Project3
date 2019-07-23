import React, { Component } from 'react';
import Axios from 'axios';

export default class SingleModel extends Component {

    state = {
        model: {}
    }

    componentDidMount() {
        Axios.get(`/api/models/${this.props.match.params.modelId}`)
            .then((res) => {
                this.setState({brand: res.data})
            })
    }

    render() {
        return (
        <div>
            
        </div>
        );
    }
}
