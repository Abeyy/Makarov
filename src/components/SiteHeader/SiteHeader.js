import React, {Component} from 'react';
import './SiteHeader.css';

class SiteHeader extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<nav class="navbar navbar-static-top">
  				<div class="container-fluid">
				    <div class="navbar-header">
				      <a class="navbar-brand" href="#">Makarov</a>
				    </div>

				    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul class="nav navbar-nav">
				        <li class="active"><a href="#">Champions <span class="sr-only">(current)</span></a></li>
				        <li><a href="#">Compositions</a></li>
				      </ul>
				     
				      <ul class="nav navbar-nav navbar-right">
				        <li><a href="#">About</a></li>
				       	<li><a href="#">Sign In</a></li>
				      </ul>
	    			</div>
  			</div>
		</nav>
		)
	}
}

export default SiteHeader;