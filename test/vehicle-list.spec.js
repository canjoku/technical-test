
import { mount } from 'enzyme'
import React from 'react'
import {expect} from 'chai';

import Xf from '../src/components/Xf'
import Xe from '../src/components/Xe'
import Fpace from '../src/components/Fpace'
import Ftype from '../src/components/Ftype'
import Xj from '../src/components/Xj'
import VehicleList from '../src/components/VehicleList'


describe('<VehicleList />', () => {
  it('contains an <Xe /> component', function () {
    const component = mount(<VehicleList/>);
    expect(component.find(Xe)).to.have.length(1);
  });

  it('contains an <Xf/> component', function () {
    const component = mount(<VehicleList/>);
    expect(component.find(Xf)).to.have.length(1);
  });

  it('contains an <Xj/> component', function () {
    const component = mount(<VehicleList/>);
    expect(component.find(Xj)).to.have.length(1);
  });

  it('contains an <Fpace/> component', function () {
    const component = mount(<VehicleList/>);
    expect(component.find(Fpace)).to.have.length(1);
  });

  it('contains an <Ftype/> component', function () {
    const component = mount(<VehicleList/>);
    expect(component.find(Ftype)).to.have.length(1);
  });

});