import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheet/Api.less';

export default class Api extends Component{
	static defaultProps = {
		apiCollection: [
			{
				name: '主题',
				items: [
					{
						name: '/topics 主题首页',
						type: 'get',
						params: [
							{
								key: 'page',
								type: 'Number',
								desc: '页数',
							},{
								key: 'tab',
								type: 'String',
								desc: (<span>主题分类。目前有<code>ask</code><code>share</code><code>job</code><code>good</code></span>),
							},{
								key: 'limit',
								type: 'Number',
								desc: '每一页的主题数量',
							},{
								key: 'mdrender',
								type: 'String',
								desc: (<span>当为<code>false</code>时，不渲染。默认为<code>true</code>，渲染出现的所有<code>markdown</code>格式文本。</span>),
							}
						],
						sample: {
							title: '/api/v1/topics',
							link: 'https://cnodejs.org/api/v1/topics',
						},
					},{
						name: '/topic/:id 主题详情',
						type: 'get',
						params: [
							{
								key: 'mdrender',
								type: 'String',
								desc: (<span>当为<code>false</code>时，不渲染。默认为<code>true</code>，渲染出现的所有<code>markdown</code>格式文本。</span>)
							},{
								key: 'accesstoken',
								type: 'String',
								desc: (<span>当需要知道一个主题是否被特定用户收藏时，才需要带此参数。会影响返回值中的<code>is_collect</code>值。</span>)
							},
						],
						sample: {
							title: '/api/v1/topic/5433d5e4e737cbe96dcef312',
							link: 'https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312',
						},
					},{
						name: '/topics 新建主题',
						type: 'post',
						params: [
							{
								key: 'accesstoken',
								type: 'String',
								desc: (<span>用户的<code>accessToken</code></span>),
							},{
								key: 'title',
								type: 'String',
								desc: '标题',
							},{
								key: 'tab',
								type: 'String',
								desc: (<span>目前有<code>ask</code><code>share</code><code>job</code></span>),
							},{
								key: 'content',
								type: 'String',
								desc: '主题内容',
							}
						],
						responSample: "{success: true, topic_id: '5433d5e4e737cbe96dcef312'}",
					},{
						name: '/topics/update 编辑主题',
						type: 'post',
						params: [
							{
								key: 'accesstoken',
								type: 'String',
								desc: (<span>用户的<code>accessToken</code></span>),
							},{
								key: 'topic_id',
								type: 'String',
								desc: '主题id',
							},{
								key: 'title',
								type: 'String',
								desc: '标题',
							},{
								key: 'tab',
								type: 'String',
								desc: (<span>目前有<code>ask</code><code>share</code><code>job</code></span>),
							},{
								key: 'content',
								type: 'String',
								desc: '主题内容',
							}
						],
						responSample: "{success: true, topic_id: '5433d5e4e737cbe96dcef312'}",
					}
				]
			},{
				name: '主题收藏',
				items: [
					{
						name: '/topic_collect/collect 收藏主题',
						type: 'post',
						params: [
							{
								key: 'accesstoken',
								type: 'String',
								desc: (<span>用户的<code>accessToken</code></span>),
							},{
								key: 'topic_id',
								type: 'String',
								desc: '主题id',
							},
						],
						responSample: "{success: true}",
					},{
						name: '/topic_collect/de_collect 取消主题',
						type: 'post',
						params: [
							{
								key: 'accesstoken',
								type: 'String',
								desc: (<span>用户的<code>accessToken</code></span>),
							},{
								key: 'topic_id',
								type: 'String',
								desc: '主题id',
							},
						],
						responSample: "{success: true}",
					},{
						name: '/topic_collect/:loginname 用户所收藏的主题',
						type: 'get',
						params: [],
						sample: {
							title: '/api/v1/topic_collect/alsotang',
							link: 'https://cnodejs.org/api/v1/topic_collect/alsotang',
						},
					},
				]
			},{
				name: '评论',
				items: [
					{
						name: '/topic/:topic_id/replies 新建评论',
						type: 'post',
						params: [
							{
								key: 'accesstoken',
								type: 'String',
								desc: (<span>用户的<code>accessToken</code></span>),
							},{
								key: 'content',
								type: 'String',
								desc: '评论的主体',
							},{
								key: 'reply_id',
								type: 'String',
								desc: '如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。',
							},
						],
						responSample: "{success: true, reply_id: '5433d5e4e737cbe96dcef312'}",
					},{
						name: '/reply/:reply_id/ups 为评论点赞',
						type: 'post',
						params: [
							{
								key: 'accesstoken',
								type: 'String',
								desc: (<span>用户的<code>accessToken</code></span>),
							}
						],
						desc: (<span>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的<code>action</code>字段中，<code>up</code>or<code>down</code></span>),
						responSample: '{"success": true, "action": "down"}',
					},
				]
			}
		]
	};

	render(){
		return (
			<div className="Api">
				<div className="Api-container">
					<div className="Api-header">
						<Link to="/">主页</Link>
						 / API
					</div>
					<div className="Api-content">
						<div className="Api-content-inner">
							<div className="Api-content-header">
								以下api路径均以
								<a src="https://cnodejs.org/api/v1"> https://cnodejs.org/api/v1 </a>
								为前缀
							</div>
							{
								this.props.apiCollection.map((collect, index) => (
									<div key={'Api-'+index} className="Api-collect">
										<h3 className="Api-collect-title">{collect.name}</h3>
										{
											collect.items.map((item, _index) => (
												<div key={'Api-item'+_index} className="Api-item">
													<h4 className="Api-item-title">{item.type + ' ' + item.name}</h4>
													{
														item.params.length ? (
															<div>
																<div className="Api-item-type">{'接收 ' + item.type + ' 参数'}</div>
																<ul className="Api-item-params">
																	{
																		item.params.map((param, index) => (
																			<li key={index} className="Api-item-param">
																				<span>{param.key}</span>
																				<code>{param.type}</code>
																				<span>{param.desc}</span>
																			</li>
																		))
																	}
																</ul>
															</div>
														) : null
													}
													{
														item.sample ? (<div className="Api-item-sample">示例: <a href={item.sample.link}>{item.sample.title}</a></div>) : null
													}
													{
														item.responSample ? (<div className="Api-item-responSample"><div>返回值示例</div><div className="code">{item.responSample}</div></div>) : null
													}
												</div>
											))
										}
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

