import React from 'react';
import { mount} from 'enzyme';
import {expect} from 'chai';
import Xe from '../src/components/Xe'


describe('<Xe />', () => {
  it('displays loading.. when no data has been fetched', function () {
    const component = mount(<Xe/>);
    expect(component.find('h1')).to.have.lengthOf(1);
  });
})