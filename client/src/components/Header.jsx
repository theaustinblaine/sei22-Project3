import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/"><img className="logo" src="https://i.imgur.com/y9CFhcZ.png" alt="Logo"/></NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink onClick={this.props.handleToggleAdminLogin}>
                        {this.props.isAdminLogin ? 'Admin Logout' : 'Admin Login'}
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        )
    }
}