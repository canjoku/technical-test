import React from 'react';
import { mount} from 'enzyme';
import {expect} from 'chai';
import Xf from '../src/components/Xf'


describe('<Xf />', () => {
  it('displays loading.. when no data has been fetched', function () {
    const component = mount(<Xf/>);
    expect(component.find('h1')).to.have.lengthOf(1);
  });
})