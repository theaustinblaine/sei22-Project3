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
                // <Header />
            <div>
                <Navbar color="dark" dark expand="lg">
                    <NavbarBrand href="/"><img className="logo" src="https://i.imgur.com/y9CFhcZ.png" alt="Logo"/></NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Container>
                    <Row className="site-body">
                        <Col xs="8" className="main-component">
                            <Switch>
                                <Route path="/brands/:brandId/models/:modelId" render={SingleModelComponent} />
                                <Route path="/brands/:brandId/models" component={ModelsList} />
                                <Route path="/brands/:brandId" component={SingleBrand} />
                                <Route exact path="/" component={Brands} />
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
