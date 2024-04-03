import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styled from 'styled-components';

import { CalendarIcon } from '../icons';
import { Input } from './Input';

export const DatePickerInput = styled(Input).attrs({ type: 'date' })`
    position: relative;

    ::-webkit-clear-button,
    ::-webkit-calendar-picker-indicator {
        position: absolute;
    }
    ::-webkit-clear-button {
        right: 1.54em;
    }
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-calendar-picker-indicator {
        right: 0;
        padding: 0.539em 0.34em;
    }
`;

export const DatePickerContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-around;

    & > input {
        display: inline-flex;
        flex-grow: 1;
        overflow: hidden;
    }

    & > svg {
        margin-left: auto;
        padding-left: ${({ theme: t }) => t.spacing.xxs};
    }
`;

export const DatePicker = ({ value, ...props }) => (
    <DatePickerContainer>
        <DatePickerInput
            {...props}
            value={value ? format(value, 'YYYY-MM-DD') : ''}
        />
        <CalendarIcon />
    </DatePickerContainer>
);

DatePicker.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};
