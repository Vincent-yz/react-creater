import { ADD_TODO, FINISH_TODO, addTodo, finishTodo } from '../actions/todo';

const todo = (state, action) => {
	switch (action.type){
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				finish: false,
			}
		case FINISH_TODO:
			if(state.id !== action.id){
				return state;
			}

			return {
				...state,
				finish: !action.finish,
			}
		default: 
			return state;
	}
}

const todos = (state = [], action) => {
	switch (action.type){
		case ADD_TODO: 
			return [
				...state,
				todo(undefined, action)
			];
		case FINISH_TODO:
			return state.map(_todo => todo(_todo, action));
		default: 
			return state;
	}
}

export default todos;
