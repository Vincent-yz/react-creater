import alt from '../alt';
import api from '../config/api';
import $ from 'jquery';

class HomeTopicActions{
	constructor(){
		this.generateActions(
			'setTab',
			'getTopicsSuccess',
			'getTopicsFail',
		);
	}

	getTopics(page = 1,tab = 'all',limit = 40, mdrender = true){
		this.actions.setTab(tab);
		$.ajax({
			url: api.topics.query,
			data: {
				page: page,
				tab: tab,
				limit: limit,
				mdrender: mdrender,
			},
		})
		.done(res => {
			this.actions.getTopicsSuccess(res);
		})
		.fail(jqXhr => {
			this.actions.getTopicsFail(jqXhr);
		});
	}
}

export default alt.createActions(HomeTopicActions);

