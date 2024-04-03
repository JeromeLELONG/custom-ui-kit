import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.nav`
    display: block;
    background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const TabsNavBar = ({ children }) => <Nav>{children}</Nav>;

TabsNavBar.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
};
