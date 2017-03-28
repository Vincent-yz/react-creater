import alt from '../alt';
import HomeTopicActions from '../action/HomeTopicActions';

class HomeTopicStore{
	constructor(){
		this.bindActions(HomeTopicActions);
		this.topics = [];
		this.tab = 'all';
	}

	onSetTab(tab){
		this.tab = tab;
	}

	onGetTopicsSuccess(res){
		this.topics = res.success === true ? res.data : [];
	}

	onGetTopicsFail(jqXhr){
		console.log(jqXhr);
		this.topics = [];
	}
}

export default alt.createStore(HomeTopicStore);