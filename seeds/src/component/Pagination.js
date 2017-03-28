import React, { PureComponent, PropTypes } from 'react';
import '../stylesheet/Pagination.less';
import classNames from 'classnames';

export default class Pagination extends PureComponent{
	constructor(props){
		super(props);

		this.state = {
			activeIndex: this.props.activeIndex
		}
	}

	static propTypes = {
		count: PropTypes.number,
		activeIndex: PropTypes.number,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		count: 1,
		activeIndex: 0,
		onChange: () => {},
	};

	componentWillUpdate(nextProps){
		if(this.state.activeIndex !== nextProps.activeIndex){
			this.setState({
				activeIndex: nextProps.activeIndex,
			});
		}
	}

	goTo(index){
		this.setState({
			activeIndex: index
		});
		this.props.onChange(index + 1);
	}

	goToStart(){
		this.setState({
			activeIndex: 0,
		});
		this.props.onChange(0);
	}

	goToEnd(){
		const { count } = this.props;

		this.setState({
			activeIndex: count - 1,
		});
		this.props.onChange(count - 1);
	}

	isVisiable(index){
		const { activeIndex, count } = this.state;
		switch(true){
			case count < 6:
			case activeIndex < 3 && index < 5: // 1 2 _3_ 4 5
			case activeIndex > (count - 3) && index > count - 6: // 6 7 _8_ 9 10
			case (index > activeIndex - 3) && (index < activeIndex + 3): // 3 4 _5_ 6 7
				return true;
			default:
				return false;
		}
	}

	getPage(){
		const pages = [];
		const { count } = this.props;
		const { activeIndex } = this.state;
		for(let i = 0;i < count;i++){
			if(true !== this.isVisiable(i))continue;
			const pageClass = classNames({
				'select': activeIndex === i,
				'Pagination-page': true,
			});
			const page = (<div className={pageClass} key={'page-'+i}>
				<button type='button' onClick={this.goTo.bind(this, i)}>{i+1}</button>
			</div>);
			pages.push(page);
		}
		return pages;
	}

	render(){
		console.log('congge');
		return (
			<div className="Pagination clearfix">
				{
					this.getPage()
				}
			</div>
		)
	}
}