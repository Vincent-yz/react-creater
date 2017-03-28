import React, { Component } from 'react';
import MyContainer from './MyContainer';

class WrappedComponent extends Component{
	static defaultProps = {
		name: '黄大神',
		age: 18,
	};

	constructor(props){
		super(props);

		this.state = {
			position: 'CEO',
			wages: '99999',
		}
	}

	sayName(){
		const { name } = this.props;
		console.log(name);
	}

	render(){
		const { name, age } = this.props;

		return (
			<div>{name + '今年' + age + '岁'}</div>
		)
	}
}

export default MyContainer(WrappedComponent);