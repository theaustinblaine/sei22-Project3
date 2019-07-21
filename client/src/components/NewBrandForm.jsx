import React, { Component } from 'react';

export default class NewBrandForm extends Component {
    render() {
        return (
        <div>
            <form>
                <label htmlFor="brand-name">Brand Name</label>
                <input 
                    type="text"
                    id="brand-name"
                    name="name"
                />
            </form>
        </div>
        );
    }
}
