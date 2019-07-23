import React, { Component } from 'react';
import Axios from 'axios'
import NewModelForm from './NewModelForm';
import {Link} from 'react-router-dom'

export default class models extends Component {

    state = {
        isAddNewModelFormDisplayed: false,
        models: [],
        newModel: {
            model: "",
            brandId: "",
            description: "",
            price: ""
        }
    }

    componentDidMount() {
        this.getAllModels()
    }
    
    getAllModels() {
        Axios.get('/api/models/')
            .then((res) => {
                this.setState({models: res.data})
            })
    }

    handleClickAddNewModelForm = () => {
        this.setState((state) => {
            return {isAddNewModelFormDisplayed: !state.isAddNewModelFormDisplayed}
        })
        this.setState({
            newModel: 
                {
                    brandId: this.props.brand._id,
                    // brand: this.props.brand.name
                }
        })

    }

    handleInputChange = (event) => {
        const copiedNewModel = {...this.state.newModel}
        copiedNewModel[event.target.name] = event.target.value

        this.setState({newModel: copiedNewModel})
    }

    handleAddNewForm = () => {
        Axios.post('/api/models', this.state.newModel)
            .then(() => {
                this.setState({isAddNewModelFormDisplayed: false})
                this.getAllModels()
            })
    }

    render() {

        let modelsList = this.state.models.map((model) => {
            return  (
                <div>
                    <h3>
                        <Link 
                            key={model._id} 
                            to={`/models/${model._id}`}
                        >
                            {model.model} - {model.price}
                        </Link>
                    </h3>
                    
                    <p>{model.description}</p>
                </div>
            )
        })

        return (
            this.state.isAddNewModelFormDisplayed
            ? <NewModelForm 
                models={this.state.models}
                newModel={this.state.newModel}
                handleInputChange={this.handleInputChange}
                handleAddNewForm={this.handleAddNewForm}
            />
            : <div>
                {modelsList}
                <button onClick={this.handleClickAddNewModelForm}>Add New Model</button>
            </div>
        );
    }
}
