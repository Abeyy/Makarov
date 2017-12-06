import React, {Component} from 'react';
import './ChampCard.css';

class ChampCard extends Component {
	constructor () {
		super();
		this.state = {
			champ_display: 'Fighter',
			clicked: false,
			team_comp: 'Browse'
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
			champ_display: e.target.value,
			clicked: true
		})
	}

	handleButton2(e) {
		this.setState({
			clicked: true,
			team_comp: e.target.value
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
		if(this.state.clicked && this.state.team_comp == "Browse") {
			return (
				<div>
				<input type="button" className='btn btn-primary' ref="tag" value="Fighter" onClick={this.handleButton.bind(this)} />
				<input type="button" className='btn btn-basic' ref="tag" value="Tank" onClick={this.handleButton.bind(this)} />
				<input type="button" className='btn btn-danger' ref="tag" value="Assassin" onClick={this.handleButton.bind(this)} />
				<input type="button" className='btn btn-info' ref="tag" value="Mage" onClick={this.handleButton.bind(this)} />
				<input type="button" className='btn btn-success' ref="tag" value="Marksman" onClick={this.handleButton.bind(this)} />
				<input type="button" className='btn btn-warning' ref="tag" value="Support" onClick={this.handleButton.bind(this)} />

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
		else if(this.state.clicked) {
			console.log(this.state.team_comp)
				if(this.state.team_comp == "Split Push") {
				return (	
					<div>
				{
	 			champList.map(function(value){
					value = value.toString()
					if ((jsonData[value].tags[0] == "Fighter" || (jsonData[value].tags[1] != undefined && jsonData[value].tags[1] == "Fighter")) && jsonData[value].tags[1] != "Mage" && jsonData[value].tags[0] != "Mage") {
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
				)

						
				}
			
		}
		else {
			return (
				<div className="teamComp_options_list">
					<h1> Select Your Team Comp: </h1>
					<input type="button" className="btn btn-primary" value="Split Push" onClick={this.handleButton2.bind(this)} />
					<input type="button" className="btn btn-primary" value="Seige" onClick={this.handleButton2.bind(this)} />
					<input type="button" className="btn btn-primary" value="Poke" onClick={this.handleButton2.bind(this)} />
					<input type="button" className="btn btn-primary" value="Team Fight" onClick={this.handleButton2.bind(this)} />
					<input type="button" className="btn btn-primary" value="Browse" onClick={this.handleButton2.bind(this)} />
				</div>
			)
		}
		
	}
}

export default ChampCard;