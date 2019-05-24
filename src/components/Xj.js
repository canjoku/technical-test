import React, { Component } from 'react';


export default
class Xj extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		fetch("http://localhost:9988/api/vehicle/xj")
		.then(res => res.json())
		.then((data) => {
			this.setState({
				data
			})
		})
	}

	render() {
		if(this.state.data) {
      console.log(this.state.data)
		    return (
					<div>
						<img src={'../../images/xj_k16.jpg'} />
            <h2>From {this.state.data.price}</h2>
            <h4>{this.state.data.description}</h4>
					</div>
		    )
	    }

		return (<h1>Loading...</h1>);
	}
}