import React from 'react';
import { Input } from './Input';
import { FormLabel } from './FormLabel';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const RangeSelectorInput = styled(Input)`
    width: initial;
    margin: 0 0.5rem;
`;

const MyFormLabel = styled(FormLabel)`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.m};
`;

const LabelSpan = styled.span`
    flex: 1 0 0;
`

const RangeSpan = styled.span`
    flex: 2 0 0;
`;

export class RangeSelector extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        lowerBound: PropTypes.string,
        upperBound: PropTypes.string,
        size: PropTypes.number,
        label: PropTypes.string,
        separator: PropTypes.string,
    };

    static defaultProps = {
        size: 3,
        separator: '-',
    };

    onChangeLowerBound = event => {
        this.props.onChange({
            lowerBound: event.target.value,
            upperBound: this.props.upperBound,
        });
    };

    onChangeUpperBound = event => {
        this.props.onChange({
            lowerBound: this.props.lowerBound,
            upperBound: event.target.value,
        });
    };

    render() {
        const {
            lowerBound,
            upperBound,
            label,
            size,
            separator,
            ...otherProps
        } = this.props;

        return (
            <MyFormLabel>
                <LabelSpan>{label}</LabelSpan>
                <RangeSpan>
                    <RangeSelectorInput
                        {...otherProps}
                        value={lowerBound}
                        size={size}
                        maxLength={size}
                        type={'text'}
                        onChange={this.onChangeLowerBound}
                        placeholder="début"
                    />
                    {separator}
                    <RangeSelectorInput
                        {...otherProps}
                        value={upperBound}
                        size={size}
                        maxLength={size}
                        type={'text'}
                        onChange={this.onChangeUpperBound}
                        placeholder="fin"
                    />
                </RangeSpan>
            </MyFormLabel>
        );
    }
}
