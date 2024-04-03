import React from 'react';
import { shallow } from 'enzyme';

import { SortableHeader } from './SortableHeader';
import { ArrowDownIcon } from '../icons';
import { GhostButton } from '../buttons';

describe('<SortableHeader />', () => {
    const defaultProps = {
        classes: {},
        onChange: () => {},
    };

    it('should display children and a sorting button', () => {
        const props = { ...defaultProps };
        const header = shallow(
            <SortableHeader {...props}>
                <strong>Attendee</strong>
            </SortableHeader>,
        );

        expect(header.find('strong').text()).toBe('Attendee');
        expect(header.find(ArrowDownIcon)).toHaveLength(1);
    });

    it('should highlight sorted column button', () => {
        const test = (order, shouldBeHighlighted) => {
            const props = { ...defaultProps, order };
            const header = shallow(<SortableHeader {...props} />);

            expect(
                header
                    .find(GhostButton)
                    .prop('className')
                    .indexOf('sorted') !== -1,
            ).toBe(shouldBeHighlighted);
        };

        test(null, false);
        test('ASC', true);
        test('DESC', true);
    });

    it('should sorting arrow icon accordingly to given order', () => {
        const test = (order, shouldBeRotated) => {
            const props = { ...defaultProps, order };
            const header = shallow(<SortableHeader {...props} />);

            expect(
                header
                    .find(GhostButton)
                    .prop('className')
                    .indexOf('rotate') !== -1,
            ).toBe(shouldBeRotated);
        };

        test(null, false);
        test('ASC', false);
        test('DESC', true);
    });

    it('should change sort direction correctly when clicking on the button', () => {
        const test = (order, expectedOnChangeArgs) => {
            const onChange = jest.fn();
            const props = { ...defaultProps, onChange, order };
            const header = shallow(<SortableHeader {...props} />);

            const sortButton = header.find(GhostButton);

            sortButton.simulate('click');
            expect(onChange.mock.calls[0]).toEqual(expectedOnChangeArgs);
        };

        test(null, ['DESC']);
        test('DESC', ['ASC']);
        test('ASC', ['DESC']);
    });
});
