import React from 'react';
import { theme } from '../theme';

export const EditIcon = props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
        <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
    </svg>
);

EditIcon.defaultProps = {
    height: 16,
    width: 16,
    fill: theme.colors.warmGrey8c,
};

EditIcon.displayName = 'EditIcon';
