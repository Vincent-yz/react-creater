import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default class App extends Component{

	render(){
		return(
			<div>
				<Nav />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}