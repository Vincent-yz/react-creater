import React, { Component } from 'react';
import '../stylesheet/Home.less';
import HomeTopic from './HomeTopic';
import HomeSignin from './HomeSignin';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="Home clearfix">
					<div className="Home-sidebar">
						<HomeSignin />
					</div>
					<div className="Home-content">
						<HomeTopic tab={this.props.location.query.tab} />
					</div>
				</div>
			</div>
		);
	}
}

