import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CartridgeContainer = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: ${({ theme }) => theme.spacing.xxs};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;

    & > *:not(:first-child) {
        margin-left: ${({ theme }) => theme.spacing.s};
    }
`;

const VerticalCenter = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderCartridge = ({ children, icon, action }) => (
    <CartridgeContainer>
        {icon && <VerticalCenter>{icon}</VerticalCenter>}
        <VerticalCenter>{children}</VerticalCenter>
        {action && (
            <VerticalCenter>
                <div>{action}</div>
            </VerticalCenter>
        )}
    </CartridgeContainer>
);

HeaderCartridge.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    action: PropTypes.node,
};
