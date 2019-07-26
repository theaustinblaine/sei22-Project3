import React, { Component } from 'react';
import { Form, Label, Input, } from 'reactstrap';

export default class NewBrandForm extends Component {
    render() {
        return (
        <div>
            <Form onSubmit={this.props.handleAddNewForm}>
                <Label htmlFor="brand-name">Brand Name:</Label>
                <Input 
                    id="brand-name"
                    type="text"
                    name="name"
                    onChange={this.props.handleInputChange}
                    value={this.props.newBrand.name}
                />
                <Label htmlFor="image-link">Image Link:</Label>
                <Input 
                    id="image-link"
                    type="text"
                    name="imageLink"
                    onChange={this.props.handleInputChange}
                    value={this.props.newBrand.imageLink}
                    />
                    <small>Images with a transparent background work best.</small>
                <Input type="submit" value="Add New Brand" />
            </Form>
        </div>
        );
    }
}
