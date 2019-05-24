import React, { Component } from 'react'
import Xe from '../components/Xe'
import Xf from '../components/Xf'
import Xj from '../components/Xj'
import Fpace from '../components/Fpace'
import Ftype from '../components/Ftype'


export default
class VehicleList extends Component {

	render() {
		return (
			<div>
				<Xe />
				<Xf />
				<Xj />
				<Fpace />
				<Ftype />
			</div>
		)
	}
}