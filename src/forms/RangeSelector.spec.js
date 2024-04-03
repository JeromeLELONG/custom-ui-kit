import React from 'react';
import { shallow } from 'enzyme';

import { theme } from '../theme';
import { RangeSelector } from './RangeSelector';

describe('RangeSelector', () => {
    const defaultProps = {
        theme,
        lowerBound: 'a',
        upperBound: 'z',
        onChange: jest.fn(),
    };

    it('should display lower and upper bounds', () => {
        const props = {
            lowerBound: 'a',
            upperBound: 'z',
            ...defaultProps,
        };

        const wrapper = shallow(<RangeSelector {...props} />);
        expect(wrapper.find('[placeholder="début"]').prop('value')).toBe('a');
        expect(wrapper.find('[placeholder="fin"]').prop('value')).toBe('z');
    });

    it('should allow the user to type a word to search for', () => {
        const props = {
            ...defaultProps,
            lowerBound: 'a',
            upperBound: 'z',
        };

        const wrapper = shallow(<RangeSelector {...props} />);

        const lowerBoundNode = wrapper.find('[placeholder="début"]');
        lowerBoundNode.simulate('change', { target: { value: 'ab' } });
        expect(props.onChange).toHaveBeenCalledWith({
            lowerBound: 'ab',
            upperBound: 'z',
        });

        const upperBoundNode = wrapper.find('[placeholder="fin"]');
        upperBoundNode.simulate('change', { target: { value: 'fe' } });
        expect(props.onChange).toHaveBeenCalledWith({
            lowerBound: 'a',
            upperBound: 'fe',
        });
    });

    it('should have a maxLength equals to size', () => {
        const props = {
            ...defaultProps,
            size: 5,
        };

        const wrapper = shallow(<RangeSelector {...props} />);
        expect(wrapper.find('[placeholder="début"]').prop('maxLength')).toBe(5);
        expect(wrapper.find('[placeholder="fin"]').prop('maxLength')).toBe(5);
    });
});
