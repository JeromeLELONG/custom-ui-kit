import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from './theme';

const ProgressContainer = styled.div`
    position: relative;
    height: 1rem;
`;

const ProgressBar = styled.progress`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.spacing.xxs};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: none;
    width: 100%;

    &::-webkit-progress-bar {
        border-radius: ${({ theme }) => theme.spacing.xxs};
        background-color: ${({ backgroundColor }) => backgroundColor};
    }

    &::-webkit-progress-value {
        border-radius: ${({ theme }) => theme.spacing.xxs};
        background-color: ${({ color }) => color};
    }

    &::-moz-progress-bar {
        border-radius: ${({ theme }) => theme.spacing.xxs};
        background-color: ${({ color }) => color};
    }
`;

const ProgressLabel = styled.span`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    text-align: center;
    font: ${({ theme }) => theme.fonts.button};
    color: ${({ theme }) => theme.colors.black};
`;

export const Progress = ({ max, value, color, backgroundColor, label }) => (
    <ProgressContainer>
        <ProgressBar max={max} value={value} color={color} backgroundColor={backgroundColor} />
        {label && <ProgressLabel>{label}</ProgressLabel>}
    </ProgressContainer>
);

Progress.propTypes = {
    max: PropTypes.number,
    value: PropTypes.number.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    label: PropTypes.string,
};

Progress.defaultProps = {
    color: theme.colors.green,
    backgroundColor: theme.colors.warmGrey4c,
};
