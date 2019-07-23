import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'

export default class SingleModel extends Component {

    state = {
        model: {},
        redirectToHome: false
    }

    componentDidMount() {
        Axios.get(`/api/models/${this.props.match.params.modelId}`)
            .then((res) => {
                this.setState({model: res.data})
            })
    }

    handleDeleteModel = () => {
        Axios.delete(`/api/models/${this.state.model._id}`)
            .then(() => {
                this.setState({redirectToHome: true})
            })
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to="/"/>
        }

        return (
        <div>
            <h2>{this.state.model.model}</h2> 
            <h3>${this.state.model.price}</h3>
            <p>{this.state.model.description}</p>
            <button>Edit Listing</button>
            <button onClick={this.handleDeleteModel}>Delete Listing</button>
        </div>
        );
    }
}
