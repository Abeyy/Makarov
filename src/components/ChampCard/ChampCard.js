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
				jsonData: d
			})
		}, () => {
			this.setState({
				requestFailed: true
			})
		})
		.then(
			this.setState({
				champ_display: this.props.champSel
			})
		)
		
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
		)
		
		
	}
}

export default ChampCard;