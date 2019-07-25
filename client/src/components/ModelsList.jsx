import React, { Component } from 'react';
import axios from 'axios'
import NewModelForm from './NewModelForm';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




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
                <Card style={{width: '250px', height: '300px'}}>
                    <h3>
                        <Link 
                            key={model._id} 
                            to={`/brands/${this.props.match.params.brandId}/models/${model._id}`}
                        >
                            {model.model} - {model.price}
                            {/* <img src="https://www.fmicassets.com/Damroot/ZoomJpg/10001/0110150808_gtr_frt_001_rr.jpg" alt={model.name}/> */}
                        </Link>
                    </h3>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        // height="140"
                        width="140"
                        image="https://www.fmicassets.com/Damroot/ZoomJpg/10001/0110150808_gtr_frt_001_rr.jpg" 
                        alt={model.name}
                        title="Contemplative Reptile"
                        />
                        <Typography gutterBottom variant="h5" component="h2">
                            {model.description}
                        </Typography>
                </Card>
            )
        })

        return (
            <React.Fragment>

                <Card style={{width: '250px'}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
            </Card>

            {this.state.isAddNewModelFormDisplayed
            ? <NewModelForm 
                models={this.state.models}
                newModel={this.state.newModel}
                handleInputChange={this.handleInputChange}
                handleAddNewForm={this.handleAddNewForm}
            />
            : <div>
                <div class="model-container">
                    {modelsList}
                </div>
                <button onClick={this.handleClickAddNewModelForm}>Add New Model</button>
            </div>}
        </React.Fragment>
        );
    }
}
