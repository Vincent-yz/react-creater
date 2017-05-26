import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, finishTodo } from '../actions/todo';

class TodoContainer extends Component{
	constructor(){

		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleFinishTodo = this.handleFinishTodo.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleAddTodo(){
		const { text } = this.state;
		if(!text || text === '')return ;
		this.props.dispatch(addTodo(text));
		this.setState({
			text: ''
		});
	}

	handleFinishTodo(target){
		this.props.dispatch(finishTodo(target));
	}

	handleInput(e){
		this.setState({
			text: e.target.value
		});
	}

	render(){
		const { todo } = this.props;

		return (
			<div>
				<div>
					<input value={this.state.text} onInput={this.handleInput} />
					<button type="button" onClick={this.handleAddTodo}>Add</button>
				</div>
				<ul className="todoList">
					{
						todo.map(item => 
							<li 
								className={item.finish ? 'finish' : ''}
								key={item.id} 
								onClick={()=>this.handleFinishTodo(item)}>
								{item.text}
							</li>
						)
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	todo: state.todo
});

export default connect(mapStateToProps)(TodoContainer);
