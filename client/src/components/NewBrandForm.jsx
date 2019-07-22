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
                <input type="submit" value="Add New Brand" />
            </form>
        </div>
        );
    }
}
