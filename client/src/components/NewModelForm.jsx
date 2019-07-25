import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class NewModelForm extends Component {

    handleSumbit = (event) => {
        event.preventDefault()

        this.props.handleAddNewForm()
    }
    render() {
        return (
        <div>
            <Form onSubmit={this.handleSumbit}>
                <Label htmlFor="model-name">Model: </Label>
                <Input 
                    id="model-name"
                    type="text"
                    name="model"
                    onChange={this.props.handleInputChange}
                    value={this.props.newModel.model}
                />
                <Label htmlFor="model-price">Price: </Label>
                <Input 
                    type="number" 
                    name="price" 
                    id="model-price" 
                    min="0" 
                    onChange={this.props.handleInputChange}
                    value={this.props.newModel.price}
                    />
                <Label htmlFor="image-link">Image Link:</Label>
                <Input 
                    id="image-link"
                    type="text"
                    name="imageLink"
                    onChange={this.props.handleInputChange}
                    value={this.props.newModel.imageLink}
                />
                <Label htmlFor="model-description">Product Description</Label>
                <Input 
                    type="textarea"
                    name="description" 
                    id="model-description" 
                    cols="30" 
                    rows="10"
                    onChange={this.props.handleInputChange}
                    value={this.props.newModel.description}
                ></Input>
                <Input type="submit" value="Add New Guitar"/> 
            </Form>
        </div>
        );
    }
}
