import React, { Component } from 'react';



export default
class Fpace extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		fetch("http://localhost:9988/api/vehicle/fpace")
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
					<div>
						<img src={'../../images/fpace_k17.jpg'} />
            <h2>From {this.state.data.price}</h2>
            <h4>{this.state.data.description}</h4>
					</div>
		    )
	    }

		return (<h1>Loading...</h1>);
	}
}