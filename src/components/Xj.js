import React, { Component } from 'react';
import { getXjData } from '../api/index'



export default
class Xj extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		getXjData((data) => {
			this.setState({
				data
			})
		});
	}

	render() {
		if(this.state.data) {
		    return (
					<div className='c-vehicle-card'>
						<img src='/images/xj_k16.jpg' className='c-vehicle-card__img'/>
						<div className='c-vehicle-card__information'>
							<h1 className='c-vehicle-card__name'>{this.state.data.id}</h1>
							<h2 className='c-vehicle-card__price'>From {this.state.data.price}</h2>
							<h4 className='c-vehicle-card__description'>{this.state.data.description}</h4>
						</div>
					</div>
		    )
	    }
		return (<h1>Loading...</h1>);
	}
}