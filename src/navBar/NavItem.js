import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { theme } from '../theme';

const Link = styled(NavLink)`
    padding: ${({ theme }) => theme.spacing.s};
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    &.selected: {
        border-bottom: ${({ theme }) => theme.colors.red} 4px solid;
    }
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
`;

const activeStyle = {
    borderBottom: `${theme.colors.red} 4px solid`,
};

export const NavItem = ({ to, children, exact, ...props }) => (
    <Link exact={exact} to={to} activeStyle={activeStyle} {...props}>
        {children}
    </Link>
);

NavItem.defaultProps = {
    exact: true,
};

NavItem.propTypes = {
    to: NavLink.propTypes.to,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    exact: NavLink.propTypes.exact,
};
