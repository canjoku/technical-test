import React from 'react';
import { mount} from 'enzyme';
import {expect} from 'chai';
import Fpace from '../src/components/Xe'


describe('<Fpace />', () => {
  it('displays loading.. when no data has been fetched', function () {
    const component = mount(<Fpace/>);
    expect(component.find('h1')).to.have.lengthOf(1);
  });
})