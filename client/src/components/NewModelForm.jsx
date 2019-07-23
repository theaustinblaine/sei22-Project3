import React, { Component } from 'react';

export default class NewModelForm extends Component {

    handleSumbit = (event) => {
        event.preventDefault()

        this.props.handleAddNewForm()
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSumbit}>
                <label htmlFor="model-name">Model: </label>
                <input 
                    id="model-name"
                    type="text"
                    name="model"
                    onChange={this.props.handleInputChange}
                />
                <label htmlFor="model-price">Price: </label>
                <input 
                    type="number" 
                    name="price" 
                    id="model-price" 
                    min="0" 
                    onChange={this.props.handleInputChange}
                    />
                <label htmlFor="model-description">Product Description</label>
                <textarea 
                    name="description" 
                    id="model-description" 
                    cols="30" 
                    rows="10"
                    onChange={this.props.handleInputChange}
                ></textarea>
                <input type="submit" value="Add New Guitar"/> 
            </form>
        </div>
        );
    }
}
