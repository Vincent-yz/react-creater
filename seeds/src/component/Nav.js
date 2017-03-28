import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import nodejs from '../image/cnodejs_light.svg';
import '../stylesheet/Nav.less';

export default class Nav extends Component{
	constructor(props){
		super(props);
		this.onSearchContentChange = this.onSearchContentChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}

	static defaultProps = {
		links: [
			{name: '新手入门',path: '/getstart'},
			{name: 'API',path: '/api'},
			{name: '关于',path: '/about'},
			{name: '注册',path: '/signup'},
			{name: '登陆',path: '/signin'},
		]
	}

	onSearchContentChange(e){
		console.log(e.target.value);
		this.setState({
			searchContent: e.target.value
		});
	}

	onSearch(e){
		e.preventDefault();
		console.log(e);
	}

	render(){
		return (
			<div className="Nav">
				<div className="Nav-container clearfix">
					<div className="Nav-logo">
						<IndexLink to="/">
							<img src={nodejs} alt="nodejs" />
						</IndexLink>
					</div>
					<div className="Nav-search">
						<form className="Nav-search-content" onSubmit={this.onSearch}>
							<input type="text" className="input" onChange={this.onSearchContentChange} />
						</form>
					</div>
					<div className="Nav-links">
						<IndexLink to="/">首页</IndexLink>
						{
							this.props.links.map((item, index) => (
								<Link to={item.path} key={"link-"+index}>
									{item.name}
								</Link>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}