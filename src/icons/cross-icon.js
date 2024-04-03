import React from 'react';
import { theme } from '../theme';

export const CrossIcon = props => (
    <svg viewBox="0 0 20 20" {...props}>
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g>
                <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" />
            </g>
        </g>
    </svg>
);

CrossIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: theme.colors.blue,
};

CrossIcon.displayName = 'CrossIcon';
