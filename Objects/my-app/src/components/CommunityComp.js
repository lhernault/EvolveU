import React, { Component } from 'react';
import Community from './Community';
import CityComp from './CityComp';
import './General.css';

class CommunityComp extends Component {
	constructor () {
		super();
		this.state = {
			nwC: new Community(),
			view: '',
			inputNameCity:null,			
			inputLatCity: 0,
			inputLongCity: 0,
			inputPopCity: 0,
			outPutCity: null, 
		}
	}

onChange = (e) => {
		if (e.target.id === 'city') {
			console.log('update city name', e.target.value);
			this.setState({
				inputNameCity: e.target.value
			})
		} else if (e.target.id === 'pop') {
			console.log('update population', Number(e.target.value));
			this.setState({
				inputPopCity: Number(e.target.value)
			})
		} else if (e.target.id === 'lat') {
			console.log('update latitude', Number(e.target.value));
			this.setState({
				inputLatCity: Number(e.target.value)
			})
		} else if (e.target.id === 'long') {
			console.log('update longitude', Number(e.target.value));
			this.setState({
				inputLongCity: Number(e.target.value)
			})
		}
	}

	// OnChange = (e) => {
	// 		this.setState ({
	// 			[e.target.id]: e.target.value
	// 		});
	// 	}


	onCityInput = () => {
		return(
			<div id='cities' className='cities'>
				<input onChange={this.onChange} id='city'type='text' placeholder='Enter City Name'></input>
				<input onChange={this.onChange} id='pop' type='number' placeholder='Enter Population'></input>
				<input onChange={this.onChange} id='lat' type='number' placeholder='Enter Latitude'></input>
				<input onChange={this.onChange} id='long' type='number' placeholder='Enter Longitude'></input>
				<button onClick={this.onAddingCity}>Submit</button>
			</div>
		)
	}

	onViewChange = () => {
		this.setState({
			view: 'add'
		})
	}

	onAddingCity = () => {
		console.log('checking Add City')
		const arr = this.state.nwC; //new array to store all methods of community /update state
		arr.addCity(this.state.inputNameCity, this.state.inputLatCity, this.state.inputLongCity, this.state.inputPopCity);
		console.log(arr);
		this.setState({
			nwC: arr,
			view: '',
		})
	}

	onDeleting = (id) => {
		console.log("checking delete city")
		const arr = this.state.nwC;
		arr.deleteCity(id);
		this.setState({
			nwC: arr,
			view: '',
		})
	}

	onShowingCity = (id) => {
		console.log("checking Show city")
		const arr = this.state.nwC;
		let info = arr.showCity(id);
		console.log(info);
		this.setState({
			outPutCity: info,
		})
	}

	onMovingIn = (id, people) => {
		console.log("checking moving in!")
		const arr = this.state.nwC;
		arr.movedInCommunity(id, people);
		this.setState({
			nwC: arr,
			// view: '',
		})
	}

	onMovingOut = (id, people) => {
		console.log("checking moving out!")
		const arr = this.state.nwC;
		arr.movedOutCommunity(id, people);
		this.setState({
			nwC: arr,
			// view: '',
		})
	}

	render() {
		const obj = this.state.nwC.cityArrList;
		console.log(obj);
		const renderList = obj.map(item => {//array of citycomp
			return <CityComp	key={item.id}//
								cityObject={item}
								onDeleting={this.onDeleting}
								onMovingIn={this.onMovingIn}
								onMovingOut={this.onMovingOut}
								onShowingCity={this.onShowingCity}
					/>

		})
		console.log(renderList);

	return(
			<div  className="commDiv">
				<div>
					<button id='inputBtn' className = "btnCity" onClick={this.onViewChange}>Add City</button>
					{this.state.view === "add" && this.onCityInput()}
					
				</div>
				
				<div className='status'>
					<form>
						<fieldset>
							<legend >City Information</legend> 
								<h6>Cities: {this.state.outPutCity}</h6>
								<h6>Most Northern: {this.state.nwC.mostNorthern()}</h6>
								<h6>Most Southern: {this.state.nwC.mostSouthern()}</h6>
								<h6>Total Population - all Cities: {this.state.nwC.getPop().toLocaleString()}</h6>						
						</fieldset>
					</form>
				</div>
				{renderList}
			</div>
		)
	}








}

export default CommunityComp;