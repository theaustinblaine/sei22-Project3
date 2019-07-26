import React, { Component } from 'react';
import CartView from './CartView.jsx';
import SingleModel from './SingleModel.jsx'
import ModelsList from './ModelsList.jsx'
import SingleBrand from './SingleBrand.jsx';
import Brands from './Brands.jsx'
import {Route, Switch} from 'react-router-dom'
import Axios from 'axios'
import { Container, Row, Col } from 'reactstrap';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Home extends Component {

    state = {
        cartItems: [],
        isAdminLogin: false
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

    handleToggleAdminLogin = () => {
        this.setState((state) => {
            return {isAdminLogin: !state.isAdminLogin}
        })
    }

    render() {

        let SingleModelComponent = (props) => {
            return (
                <SingleModel
                    handleAddToCart={this.handleAddToCart}
                    isAdminLogin={this.state.isAdminLogin}
                    {...props}
                />
            )
        }

        let BrandsListComponent = () => {
            return (
                <Brands
                    isAdminLogin={this.state.isAdminLogin}
                />
            )
        }

        let SingleBrandComponent = (props) => {
            return (
                <SingleBrand
                    isAdminLogin={this.state.isAdminLogin}
                    {...props}
                />
            )
        }

        return (
                // <Header />
            <div>
                <Navbar color="dark" dark expand="lg">
                    <NavbarBrand href="/"><img className="logo" src="https://i.imgur.com/y9CFhcZ.png" alt="Logo"/></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={this.handleToggleAdminLogin}>
                                {this.state.isAdminLogin ? 'Admin Logout' : 'Admin Login'}
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Container>
                    <Row className="site-body">
                        <Col xs="8" className="main-component">
                            <Switch>
                                <Route path="/brands/:brandId/models/:modelId" render={SingleModelComponent} />
                                <Route path="/brands/:brandId/models" component={ModelsList} />
                                <Route path="/brands/:brandId" render={SingleBrandComponent} />
                                <Route exact path="/" render={BrandsListComponent} />
                            </Switch>
                        </Col>
                        <Col xs="4" className="cart-component">
                            <CartView
                                cartItems={this.state.cartItems}
                                getCartItems={this.getCartItems}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
