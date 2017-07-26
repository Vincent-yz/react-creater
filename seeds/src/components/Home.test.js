import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('renders without crashing', () => {
	it('App()', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	});

	it('fetch exist', () => {
		expect(typeof fetch).toEqual('function');
	})
})

describe('summary', () => {
	it('1 + 1 = 2', () => {
		expect(1 + 1).toEqual(2);
	});
});
