import React, { Component } from 'react';

export default class Topics extends Component{
	render(){
		const { topics } = this.props;

		return (
			<ul>
				{
					React.Children.map(this.props.topics, (item, index) => (
						<li key={'topic-'+index} className="HomeTopic-item clearfix">
							<Link className="HomeTopic-item-author" to={'/user/'+item.author.loginname}>
								<img src={item.author.avatar_url} alt={item.loginname} />
							</Link>
							<div className="HomeTopic-item-visitor">
								<span className="HomeTopic-item-reply_count">{item.reply_count}</span>
								<span className="HomeTopic-item-visit_count">{item.visit_count}</span>
							</div>
							{
								
							}
						</li>
					))
				}
			</ul>
		)
	}
}