import React, { Component } from 'react';

export default class QrCode extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleClickQr = this.handleClickQr.bind(this);
		this.bodyClick = this.bodyClick.bind(this);

		this.state = {
			active: false,
		}
	}

	bodyClick(e){
		if(!e.target.className.match('code')){
			return;
		}

		this.setState({
			active: false,
		});
	}

	componentDidMount(){
		document.body.addEventListener('click', this.bodyClick);
	}

	componentWillUnmount(){
		document.body.removeEventListener('click', this.bodyClick);
	}

	handleClick(e){
		e.preventDefault();
		this.setState({
			active: !this.state.active,
		});
	}

	handleClickQr(e){
		e.preventDefault();
	}

	render(){
		return (
			<div className="qr-wrapper">
				<button type="button" className="qr" onClick={this.handleClick}>二维码</button>
				<div
					className="code"
					style={{display: this.state.active ? 'block' : 'none'}}
					onClick={this.handleClickQr}
				>
					<img src="qr.jpg" alt="qr" />
				</div>
			</div>
		);
	}
}