import React, { Component } from 'react';
import Axios from 'axios';

export default class CartItem extends Component {
    state = {
        cartItem: {
        }
    }

    componentDidMount() {
        Axios.get(`/api/cart/${this.props.id}`)
            .then((res) => {
                this.setState({cartItem: res.data})
            })
    }

    handleRemoveFromCart = () => {
        Axios.delete(`/api/cart/${this.state.cartItem._id}`)
            .then(() => {
                this.props.getCartItems()
            })
    }

    render() {
        return (
        <div>
            <div className="cart-item">
                <img src={this.state.cartItem.item && this.state.cartItem.item.imageLink} alt=""/>
                <div className="cart-data">
                    <strong>{this.state.cartItem.item && this.state.cartItem.item.model}</strong>
                    <p>$ {this.state.cartItem.item && this.state.cartItem.item.price}</p>
            </div>
        </div>
            <button onClick={this.handleRemoveFromCart}>Remove From Cart</button>
        </div>
        );
    }
}
