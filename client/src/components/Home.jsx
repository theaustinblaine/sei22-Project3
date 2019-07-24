import React, { Component } from 'react';
import CartView from './CartView.jsx';
import Header from './Header.jsx';
import SingleModel from './SingleModel.jsx'
import ModelsList from './ModelsList.jsx'
import SingleBrand from './SingleBrand.jsx';
import Brands from './Brands.jsx'
import {Route} from 'react-router-dom'

export default class Home extends Component {

    state = {
    }


    render() {
        return (
            <div>
                <h3>
                    <div>
                    <Header />
                    <Route path="/brands/:brandId/models/:modelId" component={SingleModel} />
                    <Route path="/brands/:brandId/models" component={ModelsList} />
                    <Route path="/brands/:brandId" component={SingleBrand} />
                    <Route exact path="/" component={Brands} />
                    <CartView />
                    </div>
                </h3>
            </div>
        );
    }
}
