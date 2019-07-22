import React, { Component } from 'react';
// import Header from './Header.jsx'
import Brands from './Brands.jsx'
// import SingleBrand from './SingleBrand.jsx';

export default class Home extends Component {

    state = {
    }


    render() {
        return (
            <div>
                <h3>
                    <div>
                        <Brands />
                    </div>
                </h3>
            </div>
        );
    }
}
