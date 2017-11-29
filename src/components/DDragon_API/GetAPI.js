import React, {Component} from 'react';
import ChampTypeButton from '../ChampTypeButton/ChampTypeButton.js';
import './GetAPI.css';

class GetAPI extends Component {
	constructor () {
		super();
		this.state = {
			champ_display: 'Fighter'

		}
		this.handleButton.bind(this);
	}

	componentWillMount() {
		fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
		
		.then( response => {
			if (!response.ok) {
				throw Error("Network Request has failed..")
			}
			return response
		})
		
		.then(d => d.json())

		.then(d => {
			this.setState({
				jsonData: d,
				champ_display: 'Marksman'
			})
		}, () => {
			this.setState({
				requestFailed: true
			})
		})
	}

	handleButton(e) {

		this.setState({
			champ_display: e.target.value
		})
	}

	render() {
		if (this.state.requestFailed) return <p> Failed </p>
		if (!this.state.jsonData) return <p> Loading.. </p>

		let jsonWork = this.state.jsonData;
		let champ_display = this.state.champ_display
		var champList = [];
		var jsonData = jsonWork.data;
		for(const name in jsonData) {
			champList.push(name);
		}

		return (
			<div>
			<input type="button" className='btn btn-primary' ref="tag" value="Fighter" onClick={this.handleButton.bind(this)} />
			<input type="button" className='btn btn-basic' ref="tag" value="Tank" onClick={this.handleButton.bind(this)} />
			<input type="button" className='btn btn-danger' ref="tag" value="Assassin" onClick={this.handleButton.bind(this)} />
			<input type="button" className='btn btn-info' ref="tag" value="Mage" onClick={this.handleButton.bind(this)} />
			<input type="button" className='btn btn-success' ref="tag" value="Marksman" onClick={this.handleButton.bind(this)} />
			<input type="button" className='btn btn-warning' ref="tag" value="Support" onClick={this.handleButton.bind(this)} />
			<ChampTypeButton> Fighter </ChampTypeButton>
			<div>
			{
 			champList.map(function(value){
				value = value.toString()

				if (jsonData[value].tags[0] == champ_display || (jsonData[value].tags[1] != undefined && jsonData[value].tags[1] == champ_display)) {
					return(
						<div>
						<div className='col-md-1'>
						</div>
						<div className="col-md-5 champion_box">
							<h1>{value}</h1>
							<div className="img-wrapper">
								<img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + jsonData[value].image.full} />
							</div>
							<div className="text-wrapper">
								<div> Champion Difficulty: {jsonData[value].info.difficulty} </div>
								<div> Primary Role: {jsonData[value].tags[0]} </div>
							 	<div> Secondary Role: {jsonData[value].tags[1]} </div>
							</div>
						</div>
						</div>
					)
				}

			})
 			}
 			</div>
 			</div>
		)
	}
}

export default GetAPI;