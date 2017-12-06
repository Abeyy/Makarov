import React, {Component} from 'react';

class ChampTypeButton extends Component {
	constructor(){
		super();
		this.state = {
			btnClass: 'btn btn-primary'
		}
	}

	componentWillMount() {
		// if(this.props.children == "Fighter") {
		// 	this.setState({
		// 	btnClass: 'btn btn-danger'
		// })
		// }
		switch (this.props.children) {
			case "Fighter":
				this.setState({
					btnClass: 'btn btn-warning'
				})
				break;
			case "Tank":
				this.setState({
					btnClass: 'btn btn-default'
				})
				break;
			case "Assassin":
				this.setState({
					btnClass: 'btn btn-danger'
				})
				break;
			case "Mage":
				this.setState({
					btnClass: 'btn btn-primary'
				})
				break;
			case "Marksman":
				this.setState({
					btnClass: 'btn btn-success'
				})
				break;
			case "Support":
				this.setState({
					btnClass: 'btn btn-info'
				})
				break;
			default: 
				this.setState({
					btnClass: 'btn btn-primary'
				})
		}
	}

	render () {
		return (

			<button value={this.props.children} className={this.state.btnClass} > {this.props.children} </button>
		)
	}
}

export default ChampTypeButton;