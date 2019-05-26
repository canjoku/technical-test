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
			<div className='c-vehicle-list-container'>
				<Xe className='c-vehicle-list-container__vehicle'/>
				<Xf className='c-vehicle-list-container__vehicle'/>
				<Xj className='c-vehicle-list-container__vehicle'/>
				<Fpace className='c-vehicle-list-container__vehicle'/>
				<Ftype className='c-vehicle-list-container__vehicle'/>
			</div>
		)
	}
}