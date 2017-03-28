import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';

export default class Tabs extends Component{
	static propTypes = {
		className: PropTypes.string,
		classPrefix: PropTypes.string,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.nodex,
		]),
		defaultActiveIndex: PropTypes.number,
		activeIndex: PropTypes.number,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		classPrefix: 'tabs',
		onChange: () => {},
	};

	constructor(props){
		super(props);

		this.handleTabClick = this.handleTabClick.bind(this);

		const currProps = this.props;

		let activeIndex = 0;
		if('activeIndex' in currProps){
			activeIndex = currProps.activeIndex;
		}else if('defaultActiveIndex' in currProps){
			activeIndex = currProps.defaultActiveIndex;
		}

		this.state = {
			activeIndex,
			prevIndex: activeIndex,
		}
	}

	componentWillReceiveProps(nextProps){
		if('activeIndex' in nextProps){
			this.setState({
				activeIndex: nextProps.activeIndex,
			});
		}
	}

	handleTabClick(activeIndex){
		const prevIndex = this.state.activeIndex;

		if(this.state.activeIndex !== activeIndex){
			this.setState({
				activeIndex,
				prevIndex,
			});

			this.props.onChange({activeIndex, prevIndex});
		}
	}

	renderTabNav(){
		const { classPrefix, children } = this.props;

		return (
			<TabNav 
			  key="tabBar"
			  classPrefix={classPrefix}
			  onTabClick={this.handleTabClick}
			  panels={children}
			  activeIndex={this.state.activeIndex}
			/>
		);
	}

	renderTabContent(){
		const { classPrefix, children } = this.props;

		return (
			<TabContent
			  key="tabcontent"
			  classPrefix={classPrefix}
			  panels={children}
			  activeIndex={this.state.activeIndex}
			/>
		);
	}

	// getTabPanes(){
	// 	const { classPrefix, activeIndex, children, isActive } = this.props;

	// 	return React.Children.map(children, child => {
	// 		if(!child){return;}

	// 		const order = parseInt(child.props.order, 10);
	// 		const isActive = activeIndex === order;

	// 		return React.cloneElement(child, {
	// 			classPrefix,
	// 			isActive,
	// 			children: child.props.children,
	// 			key: 'tabpane-'+order,
	// 		});

	// 	});
	// }

	render(){
		const { className } = this.props;
		const {classes } = classnames(className, 'ui-tabs');

		return (
			<div className={classes}>
				{this.renderTabNav()}
				{this.renderTabContent()}
			</div>
		);
	}
}