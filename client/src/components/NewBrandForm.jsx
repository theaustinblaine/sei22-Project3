import React, { Component } from 'react';

export default class NewBrandForm extends Component {
    render() {
        return (
        <div>
            <form onSubmit={this.props.handleAddNewForm}>
                <label htmlFor="brand-name">Brand Name</label>
                <input 
                    id="brand-name"
                    type="text"
                    name="name"
                    onChange={this.props.handleInputChange}
                    value={this.props.newBrand.name}
                />
                <label htmlFor="image-link">Image Link</label>
                <input 
                    id="image-link"
                    type="text"
                    name="imageLink"
                    onChange={this.props.handleInputChange}
                    value={this.props.newBrand.imageLink}
                />
                <input type="submit" value="Add New Brand" />
            </form>
        </div>
        );
    }
}
