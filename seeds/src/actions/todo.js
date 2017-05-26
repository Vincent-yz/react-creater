export const ADD_TODO = 'ADD_TODO';
export const FINISH_TODO = 'FINISH_TODO';

const autoid = 0;

export const addTodo = (text) => ({
	type: ADD_TODO,
	id: autoid++,
	text,
});

export const finishTodo = (target) => ({
	type: FINISH_TODO,
	...target,
});
