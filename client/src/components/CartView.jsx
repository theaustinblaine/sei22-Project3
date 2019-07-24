import React, { Component } from 'react';
import CartItem from './CartItem';

export default class CartView extends Component {
    state = {
    }
    
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
