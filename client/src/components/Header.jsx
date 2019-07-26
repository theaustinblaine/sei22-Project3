import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        }
        toggle() {
            this.setState({
            isOpen: !this.state.isOpen
            });
        }

    render() {
        return (
        <div>
            <Navbar color="dark" light expand="sm">
                <NavbarBrand href="/"><img src="https://i.imgur.com/y9CFhcZ.png" alt="Logo"/></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        );
    }
}
