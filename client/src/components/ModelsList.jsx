import React, { Component } from 'react';
import axios from 'axios'
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
            price: "",
            imageLink: ""
        }
    }

    componentDidMount() {
        this.getAllModels()
    }
    
    getAllModels = () => {
        axios.get(`/api/brands/${this.props.match.params.brandId}/models`)
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
                }
        })

    }

    handleInputChange = (event) => {
        const copiedNewModel = {...this.state.newModel}
        copiedNewModel[event.target.name] = event.target.value

        this.setState({newModel: copiedNewModel})
    }

    handleAddNewForm = () => {
        axios.post(`/api/brands/${this.props.brand._id}/models`, this.state.newModel)
            .then(() => {
                this.setState({isAddNewModelFormDisplayed: false})
                this.getAllModels()
            })
    }

    render() {

        let modelsList = this.state.models.map((model) => {
            return  (
                <div className="models-list">
                    <h5>
                        <Link 
                            key={model._id} 
                            to={`/brands/${this.props.match.params.brandId}/models/${model._id}`}
                        >
                            {model.model} - ${model.price}
                        </Link>
                    </h5>
                    <img className="model-image" src={model.imageLink} alt={model.name}/>        
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
            {this.props.isAdminLogin ? <button onClick={this.handleClickAddNewModelForm}>Add New Model</button> : null}
            </div>
        )
    }
}
