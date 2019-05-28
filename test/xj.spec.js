import React from 'react';
import { mount} from 'enzyme';
import {expect} from 'chai';
import Xj from '../src/components/Xe'


describe('<Xj />', () => {
  it('displays loading.. when no data has been fetched', function () {
    const component = mount(<Xj/>);
    expect(component.find('h1')).to.have.lengthOf(1);
  });
})