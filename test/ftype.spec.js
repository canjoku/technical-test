import React from 'react';
import { mount} from 'enzyme';
import {expect} from 'chai';
import Ftype from '../src/components/Xe'


describe('<Ftype />', () => {
  it('displays loading.. when no data has been fetched', function () {
    const component = mount(<Ftype/>);
    expect(component.find('h1')).to.have.lengthOf(1);
  });
})