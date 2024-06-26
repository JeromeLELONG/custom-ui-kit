import React from 'react';
import { theme } from '../theme';

export const TrashIcon = props => (
    <svg viewBox="0 0 20 20" {...props}>
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g>
                <path d="M2,2 L18,2 L18,4 L2,4 L2,2 Z M8,0 L12,0 L14,2 L6,2 L8,0 Z M3,6 L17,6 L16,20 L4,20 L3,6 Z M8,8 L9,8 L9,18 L8,18 L8,8 Z M11,8 L12,8 L12,18 L11,18 L11,8 Z" />
            </g>
        </g>
    </svg>
);

TrashIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: theme.colors.red,
};

TrashIcon.displayName = 'TrashIcon';
