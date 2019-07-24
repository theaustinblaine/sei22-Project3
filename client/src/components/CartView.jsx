import React, { Component } from 'react';
import Axios from 'axios';

export default class CartView extends Component {
    state = {
        cartItems: []
    }
    
    componentDidMount() {
        Axios.get('/api/cart')
            .then((res) => {
                this.setState({cartItems: res.data})
            })
    }
    
    render() {

        let cartList = this.state.cartItems.map((item) => {
            return (
                <p>{item.name}</p>
            )
        })

        return (
        <div>
            <h1>CART</h1>
            {cartList}
        </div>
        );
    }
}
