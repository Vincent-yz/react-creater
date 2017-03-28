import React, { Component } from 'react';
import Tabs from './Tabs';
import TabPane from './TabPane';

export default class Test extends Component{
	render(){
		return (
			<div>
				<Tabs >
					<TabPane order="0" key={0} tab="tab 1">第一个suc</TabPane>
					<TabPane order="1" key={1} tab="tab 2">第二个suc</TabPane>
					<TabPane order="2" key={2} tab="tab 3">第三个suc</TabPane>
				</Tabs>
			</div>
		)
	}
}