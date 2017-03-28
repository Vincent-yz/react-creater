import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheet/HomeTopic.less';
import HomeTopicActions from '../action/HomeTopicActions';
import HomeTopicStore from '../store/HomeTopicStore';
import Pagination from './Pagination';

export default class HomeTopic extends Component{
	constructor(props){
		super(props);
		this.state = HomeTopicStore.getState();
		// eslint-disable-next-line
		this.state.activeIndex = 1;
		this.onChange = this.onChange.bind(this);
		this.onPageChange = this.onPageChange.bind(this);
	}

	static defaultProps = {
		topicType: [
			{tab: 'all',text: '全部'},
			{tab: 'good',text: '精华'},
			{tab: 'share',text: '分享'},
			{tab: 'ask',text: '问答'},
			{tab: 'job',text: '招聘'},
		]
	};

	componentDidMount(){
		HomeTopicStore.listen(this.onChange);
		HomeTopicActions.getTopics();
	}

	componentWillUnmount(){
		HomeTopicStore.unlisten(this.onChange);
	}
	// 获取tab类型
	getTabType(item){
		if(true === item.top)return '置顶';
		if(true === item.good)return '精华';
		// eslint-disable-next-line
		switch(item.tab){
			case 'ask':
				return '问答';
			case 'share':
				return '分享';
			case 'job':
				return '招聘';
		};
	}
	// 点击tab时重新获取对应tab内容，页码切重置
	handleChangeTab(tab){
		if(this.state.tab === tab)return;
		HomeTopicActions.getTopics(1, tab);
		this.setState({
			activeIndex: 1,
		});
	}
	// 主题标签
	assertHasTag(item){
		return !!item.top || !!item.good || !!item.tab;
	}
	// 主题标签高亮
	assertHighLight(item){
		return !!item.top || !!item.good;
	}
	// store更新绑定事件
	onChange(state){
		this.setState(state);
		document.body.scrollTop = 0;
	}
	// pagination组件变更选中页后，获取内容
	onPageChange(index){
		const { tab } = this.state;
		this.setState({
			activeIndex: index,
		});
		HomeTopicActions.getTopics(index, tab);
	}

	render(){
		const { topicType } = this.props;
		const { topics, tab, activeIndex } = this.state;

		return(
			<div className="HomeTopic">
				<ul className="HomeTopic-nav clearfix">
					{
						topicType.map((topic, index) => (
							<li className="HomeTopic-nav-item" key={'topic-'+index}>
								<button className={tab === topic.tab ? 'active' : ''} 
								        type="button" 
								        onClick={this.handleChangeTab.bind(this, topic.tab)}>
								  {topic.text}
								</button>
							</li>
						))
					}
				</ul>
				<div className="HomeTopic-content">
					<ul>
						{
							topics.map((item, index) => (
								<li key={'topic-'+item.id} className="HomeTopic-item clearfix">
									<Link className="HomeTopic-item-author" to={'/user/' + item.author.loginname}>
										<img src={item.author.avatar_url} alt={item.loginname} />
									</Link>
									<div className="HomeTopic-item-visitor">
										<span className="HomeTopic-item-reply_count">{item.reply_count}</span>
										<span className="HomeTopic-item-visit_count">{item.visit_count}</span>
									</div>
									{
										(this.assertHasTag(item)) ? (
											<div className="HomeTopic-item-type">
												<span className={this.assertHighLight(item)?"HomeTopic-item-highlight":""}>{this.getTabType(item)}</span>
											</div>
										) : null
									}
									<Link to={'/topic/' + item.id} className="HomeTopic-item-title">{item.title}</Link>
									<div className="HomeTopic-item-last_reply">{}</div>
								</li>
							))
						}
					</ul>
				</div>
				<Pagination activeIndex={activeIndex - 1} onChange={this.onPageChange} count={100} />
			</div>
		)
	}
}