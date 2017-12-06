import React, {Component} from 'react';
import ChampTypeButton from '../ChampTypeButton/ChampTypeButton.js';
import ChampCard from '../ChampCard/ChampCard.js';

class ChampList extends Component {
	constructor() {
		super();
		this.state = {
			champSel: 'Marksman'
		}
		this.handleButton.bind(this);
	}

	handleButton(e) {
		console.log('its happening')
		this.setState({
			champSel: e.target.value
		})
	}

	render () {
		return (
		<div>
			<div>
				<ChampTypeButton onClick={this.handleButton.bind(this)}>Fighter</ChampTypeButton>
		    	<ChampTypeButton onClick={this.handleButton.bind(this)}>Tank</ChampTypeButton>
		    	<ChampTypeButton onClick={this.handleButton.bind(this)}>Assassin</ChampTypeButton>
		    	<ChampTypeButton onClick={this.handleButton.bind(this)}>Mage</ChampTypeButton>
		        <ChampTypeButton onClick={this.handleButton.bind(this)}>Marksman</ChampTypeButton>
				<ChampTypeButton onClick={this.handleButton.bind(this)}>Support</ChampTypeButton>
			</div>
        	<ChampCard champSel={this.state.champSel}/>
		</div>
		) 

		
	}
}

export default ChampList;