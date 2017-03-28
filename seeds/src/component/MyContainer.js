import React, { Component } from 'react';

const MyContainer = (WrappedComponent) => (
	// class extends Component{
	// 	proc(wrappedComponentInstance){
	// 		console.log(this);
	// 		wrappedComponentInstance.sayName();
	// 	}

	// 	render(){
	// 		const props = Object.assign({}, this.props, {ref: this.proc.bind(this)});
	// 		return (
	// 			<div>
	// 				<pre>{JSON.stringify(props), null, 2}</pre>
	// 				<WrappedComponent {...props} />
	// 			</div>
	// 		)
	// 	}
	// }
	class extends WrappedComponent{
		// static defaultProps = {
		// 	name: 'congge',
		// };

		render(){
			const elementsTree = super.render();
			let newProps = {};
			if(elementsTree && elementsTree.type === 'div'){
				newProps = {'data-value': 'congge diaozhatian'};
			}
			const props = Object.assign({}, elementsTree.props, newProps);
			const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);

			return newElementsTree;

			// 下面是渲染劫持

			return (
				<div>
					<h2>HOC Debugger Component</h2>
					<p>Props</p><pre>{JSON.stringify(this.props, null, 2)}</pre>
					<p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
					<WrappedComponent {...this.props} />
				</div>
			)
		}
	}
)

export default MyContainer;