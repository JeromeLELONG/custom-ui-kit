import React from 'react';
import { theme } from '../theme';

export const ArrowUpIcon = props => (
    <svg viewBox="0 0 20 20" {...props}>
        <g>
            <g>
                <polygon points="9 3.82842712 2.92893219 9.89949494 1.51471863 8.48528137 10 0 10.7071068 0.707106781 18.4852814 8.48528137 17.0710678 9.89949494 11 3.82842712 11 20 9 20 9 3.82842712" />
            </g>
        </g>
    </svg>
);

ArrowUpIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: theme.colors.warmGrey8c,
};

ArrowUpIcon.displayName = 'ArrowUpIcon';
