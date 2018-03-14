import { expect } from '../support/spec-helper';
import { shallow } from 'enzyme';
import * as React from 'react';

import Index from '../../pages/index';

describe('Index', () => {
  it('works', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper).to.exist;
  });
});
