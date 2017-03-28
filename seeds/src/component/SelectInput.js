import React, { Component } from 'react';

const searchDecorator = WrappedComponent => {
	class SearchDecorator extends Component {
		constructor(props){
			super(props);

			this.handleSearch = this.handleSearch.bind(this);
		}

		handleSearch(keyword){
			this.setState({
				data: this.props.data,
				keyword
			});
			this.props.onSearch(keyword);
		}

		render(){
			const { data, keyword } = this.state;
			return (
				<WrappedComponent
					{...this.props}
					data={data}
					keyword={keyword}
					onSearch={this.onSearch}
				/>
			);
		}
	}
	
	return SearchDecorator;
}

export default class SelectInput extends Component{
	static displayName = 'SelectInput';

	render(){
		const { selectedItem, isActive, onClickHeader, placeholder } = this.props;
		const { text } = selectedItem;

		return (
			<div>
				<div onClick={onClickHeader}>
					<input
						type="text"
						disabled
						value={text}
						placeholder={placeholder}
					/>
					<i className={isActive} name="angle-down"></i>
				</div>
			</div>
		);
	}
}