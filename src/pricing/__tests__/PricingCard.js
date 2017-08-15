import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PricingCard from '../PricingCard';
import { getTheme } from '../../config/';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: React.PropTypes.object },
};

describe('PricingCard component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <PricingCard
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with props', () => {
    const component = shallow(
      <PricingCard
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        titleFont="arial"
        infoFont="arial"
        pricingFont="arial"
        buttonFont="arial"
        containerStyle={{ backgroundColor: 'peru' }}
        wrapperStyle={{ backgroundColor: 'peru' }}
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
