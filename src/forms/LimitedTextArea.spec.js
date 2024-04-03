import React from 'react';
import { render, Simulate } from 'react-testing-library';

jest.mock('styled-components', () => ({
    input: () => ({
        withComponent: () => 'textarea',
    }),
    p: () => 'p',
}));

import { LimitedTextArea } from './LimitedTextArea';

describe('Limited TextArea', () => {
    const defaultProps = {
        limit: 300,
        onChange: () => {},
    };

    it('should display number of currently written characters and limit', () => {
        const props = { ...defaultProps, limit: 450, value: 'Hello World!' };
        const wrapper = render(<LimitedTextArea {...props} />);

        expect(wrapper.getAllByText('12 / 450')).toHaveLength(1);
    });

    it('should truncate text if too long', () => {
        const onChange = jest.fn();
        const props = {
            ...defaultProps,
            placeholder: 'Missions',
            limit: 2,
            onChange,
        };
        const wrapper = render(<LimitedTextArea {...props} />);

        const input = wrapper.queryByPlaceholderText('Missions');
        Simulate.change(input, { target: { value: 'foo' } });

        expect(onChange).toHaveBeenCalledWith('fo');
    });
});
