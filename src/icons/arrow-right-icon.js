import React from 'react';
import PropTypes from 'prop-types';

import { theme } from '../theme';

const styles = {
    root: {
        transform: 'rotate(-90deg)',
    },
};

export const ArrowRightIcon = props => (
    <svg viewBox="0 0 20 20" {...props} style={{ ...props.style, ...styles.root }}>
        <g>
            <polygon
                points="9 16.1715729 2.92893219 10.1005051 1.51471863 11.5147186 10 20 10.7071068 19.2928932 18.4852814 11.5147186 17.0710678 10.1005051 11 16.1715729 11 0 9 0"
            />
        </g>
    </svg>
);

ArrowRightIcon.displayName = 'ArrowRightIcon';

ArrowRightIcon.propTypes = {
    style: PropTypes.object,
};

ArrowRightIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: theme.colors.warmGrey8c,
};
