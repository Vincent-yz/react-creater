import React, { Component } from 'react';
// import { Link } from 'react-router';
import ucloud from '../image/ucloud';
import qiniu from '../image/qiniu';
import alinode from '../image/alinode';
import '../stylesheet/Footer.less';

export default class Footer extends Component{
	render(){
		return (
			<div className="Footer">
				<div className="Footer-content">
					<p>
						<a href="https://cnodejs.org/rss">RRS</a>
						<span> | </span>
						<a href="https://github.com/cnodejs/nodeclub">源码地址</a>
					</p>
					<p>CNode社区为国内最专业的Node.js开源技术社区，致力于Node.js的技术研究。</p>
					<p>
						服务器赞助商为 
						<a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
							<img src={ucloud} alt="UCLOUD" width="92px" />
						</a>
						，存储赞助商为 
						<a href="http://www.qiniu.com/?ref=cnode">
							<img src={qiniu} alt="七牛云" width="115px" />
						</a>
						，由 
						<a href="https://alinode.aliyun.com/?ref=cnode">
							<img src={alinode} alt="阿里node" width="166px" />
						</a>
						提供应用性能服务。
					</p>
					<p>
						新手搭建Node.js服务器，推荐使用无需备案的 
						<a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a>
					</p>
				</div>
			</div>
		)
	}
}