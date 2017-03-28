import React, { Component } from 'react';

const searchDecorator = WrappedComponent => {
	class SearchDecorator extends Component{
		constructor(props){
			super(props);

			this.handleSearch = this.handleSearch.bind(this);
		}

		handleSearch(keyword){
			this.setState({
				data: this.props.data,
				keyword,
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
					onSearch={this.handleSearch}
				/>
			);
		}
	}
	return SearchDecorator;
}

const asyncSelectDecorator = WrappedCompoent => {
	class AsyncSelectDecorator extends Component{
		componentDidMount(){
			const { url, params } = this.props;

			fetch(url, {params}).then(data => {
				this.setState({
					data,
				});
			});
		}

		render(){
			return (
				<WrappedCompoent
					{...this.props}
					data={this.state.data}
				/>
			)
		}
	}
	return AsyncSelectDecorator;
}