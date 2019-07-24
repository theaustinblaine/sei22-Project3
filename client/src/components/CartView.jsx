import React, { Component } from 'react';
import CartItem from './CartItem';

export default class CartView extends Component {
    
    componentDidMount() {
        this.props.getCartItems()
    }

    
    
    render() {

        let cartList = this.props.cartItems.map((item) => {
            return (
                <div>
                    <CartItem 
                        handleRemoveFromCart={this.handleRemoveFromCart}
                        getCartItems={this.props.getCartItems}
                        id={item._id}
                    />
                </div>
            )
        })

        return (
        <div>
            <h2>YOUR CART</h2>
            {cartList}
        </div>
        );
    }
}
