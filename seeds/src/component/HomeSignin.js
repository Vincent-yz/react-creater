import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheet/HomeSignin.less';

export default class HomeSignin extends Component{

	render(){
		return (
			<div className="HomeSignin">
				<p className="HomeSignin-title">CNode: Node.js专业中文社区</p>
				<p className="HomeSignin-links">
					您可以
					<Link to="signin">登录</Link>
					或
					<Link to="signup">注册</Link>
					, 也可以
				</p>
				<p className="HomeSignin-github">
					<Link to="auth/github">通过 GitHub 登录</Link>
				</p>
			</div>
		)
	}
}