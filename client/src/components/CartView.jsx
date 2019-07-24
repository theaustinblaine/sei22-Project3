import React, { Component } from 'react';
import Axios from 'axios';
import CartItem from './CartItem';

export default class CartView extends Component {
    state = {
        cartItems: []
    }
    
    componentDidMount() {
        this.getCartItems()
    }

    getCartItems = () => {
        Axios.get('/api/cart')
            .then((res) => {
                this.setState({cartItems: res.data})
            })
    }
    
    render() {

        let cartList = this.state.cartItems.map((item) => {
            return (
                <div>
                    <CartItem 
                        handleRemoveFromCart={this.handleRemoveFromCart}
                        getCartItems={this.getCartItems}
                        name={item.name}
                        id={item._id}
                    />
                </div>
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
