import React, { Component } from 'react';
import CartView from './CartView.jsx';
import Header from './Header.jsx';
import SingleModel from './SingleModel.jsx'
import ModelsList from './ModelsList.jsx'
import SingleBrand from './SingleBrand.jsx';
import Brands from './Brands.jsx'
import {Route, Switch} from 'react-router-dom'
import Axios from 'axios'
import 'typeface-roboto'
import Box from '@material-ui/core/Box';

export default class Home extends Component {

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

    handleAddToCart = (model) => {
        Axios.post('/api/cart', {item: model})
            .then(() => {
                this.getCartItems()
            })
    }

    render() {

        let SingleModelComponent = (props) => {
            return (
                <SingleModel
                    handleAddToCart={this.handleAddToCart}
                    {...props}
                />
            )
        }

        return (
            <div>
                <h3>
                    <div>
                    <Box><Header /></Box>
                    <Switch>
                        <Box>
                            <Route path="/brands/:brandId/models/:modelId" render={SingleModelComponent} />
                            <Route path="/brands/:brandId/models" component={ModelsList} />
                            <Route path="/brands/:brandId" component={SingleBrand} />
                            <Route exact path="/" component={Brands} />
                        </Box>
                    </Switch>
                    <Box>
                        <CartView
                            cartItems={this.state.cartItems}
                            getCartItems={this.getCartItems}
                        />
                    </Box>
                    </div>
                </h3>
            </div>
        );
    }
}
