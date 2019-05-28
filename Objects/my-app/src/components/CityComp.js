import React, { Component } from 'react';
import City from './City';


import './General.css';


class CityComp extends Component {
	constructor (props) {
		super(props);
		this.state = {
			inputUpdate: 0,
			cityObject:this.props.cityObject			
		}
	}

	handleChange = (e) => {
			this.setState ({
				inputUpdate: Number (e.target.value)
			});
		}


	moveIn = (id, people) => {
        	this.props.onMovingIn(this.props.cityObject.id, this.state.inputUpdate);
        	this.setState({
			inputUpdate: 0,
		})
    }

    moveOut = (id, people) => {
        	this.props.onMovingOut(this.props.cityObject.id, this.state.inputUpdate);
        	this.setState({
			inputUpdate: 0,
		})
    }

    showingInfo = () => {
		this.props.onShowingCity(this.props.cityObject.id)
	}

	deletingCity = () => {
		this.props.onDeleting(this.props.cityObject.id)
	}


	render(props) {
		return(
			<div className='classCityDiv'>		
				
					<h6 id='info'>Name: {this.props.cityObject.name}</h6>
					<h6 id='info'>Type: {this.props.cityObject.howBig()}  </h6>
					<h6 id='info'>Population: {this.props.cityObject.pop}</h6>
					<h6 id='info'>Latitude:{this.props.cityObject.lat}</h6>
					<h6 id='info'>Longitude: {this.props.cityObject.long}</h6>
					<h6 id='info'>Hempishere: {this.props.cityObject.whichSphere()}</h6>
					<input className="inputBtnP" type='text' value={this.state.inputUpdate} placeholder='Enter Numbers' onChange={this.handleChange}></input>
					<br></br>							
					<button id='btns' className = "btnCity" onClick={this.moveIn}>Moved In</button>
					<button id='btns' className = "btnCity" onClick={this.moveOut}>Moved Out</button>
					<button id='btns' className = "btnCity" onClick={this.showingInfo}>Show Info</button>
					<button id='btns' className = "btnCity"onClick={this.deletingCity}>Delete</button>
				
			</div>

		)
	}




}

export default CityComp;