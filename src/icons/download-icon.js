import React from 'react';
import { theme } from '../theme';

export const DownloadIcon = props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
);

DownloadIcon.defaultProps = {
    height: 16,
    width: 16,
    fill: theme.colors.warmGrey8c,
};

DownloadIcon.displayName = 'DownloadIcon';
