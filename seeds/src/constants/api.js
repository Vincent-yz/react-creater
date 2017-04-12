const host = 'https://cnodejs.org/api/v1/';

export default {
	topics: {
		query: host + 'topics',
		get: host + 'topic/',
		create: host + 'topics',
		update: host + 'topics/update',
	},
	topic_collect: {
		collect: host + '/topic_collect/collect',
		de_collect: host + '/topic_collect/de_collect',
		query: host + '/topic_collect/',
	},
}