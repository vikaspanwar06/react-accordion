import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class Panel extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			height: 0
		};
	}

	componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        const height = el.querySelector('.panel__inner').scrollHeight;
        this.setState({
            height
        });
	}

	render () {
		const { label, sublink1, linkTo1, sublink2, linkTo2, activeTab, index, activateTab } = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		const innerStyle = {
			height:  `${isActive ? height : 0}px`
		}

		return (
			<div className='panel'
				aria-expanded={ isActive }>
				<button className='panel__label'
					role='tab'
					onClick={ activateTab }>
					{ label }
				</button>
				<div className='panel__inner'
					style={ innerStyle }
					aria-hidden={ !isActive }>
					<ul className='panel__content'>
						<li><Link to={linkTo1}>{sublink1}</Link></li>
                        <li><Link to={linkTo2}>{sublink2}</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Panel;