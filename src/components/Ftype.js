import React, { Component } from 'react';


export default
class Ftype extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		fetch("http://localhost:9988/api/vehicle/ftype")
		.then(res => res.json())
		.then((data) => {
			this.setState({
				data
			})
		})
	}

	render() {
		if(this.state.data) {
		    return (
					<div className='c-vehicle-card'>
						<img src='/images/ftype_k17.jpg' className='c-vehicle-card__img'/>
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