import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MaxWidthContainer } from '../MaxWidthContainer';
import { CnamLogo } from '../../cnam-logo';
import { LoggedUser } from './LoggedUser';

const AppHeaderLogo = styled(CnamLogo)`
    height: ${({ theme }) => theme.fontSizes.m};
    flex-grow: 0;

    & path {
        fill: ${({ theme }) => theme.colors.white};
    }
`;

const AppHeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.primaryRed};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.s} 0;
    position: ${({ mode = 'fixed' }) => mode.toString()};
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`;

const AppInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
`;

const AppHeaderTitleContainer = styled.h1`
    align-items: center;
    display: flex;
    font: ${({ theme }) => theme.fonts.appHeader};
    margin: 0;
    white-space: nowrap;
`;

const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    > * {
        margin: 0 1ex;
    }
`;

export const Header = ({ user, logoutUrl, title, userInformation, additionalAction }) => (
    <AppHeaderContainer>
        <MaxWidthContainer>
            <AppInnerContainer>
                <AppHeaderTitleContainer>
                    <AppHeaderLogo />
                    {title}
                </AppHeaderTitleContainer>
                <ActionContainer>
                    {additionalAction}
                    {!!logoutUrl ? (
                        <LoggedUser logoutUrl={logoutUrl} userInformation={userInformation} />
                    ) : (
                        !!user && <LoggedUser {...user} userInformation={userInformation} />
                    )}
                </ActionContainer>
            </AppInnerContainer>
        </MaxWidthContainer>
    </AppHeaderContainer>
);

const userType = PropTypes.shape({
    logoutUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    profile: PropTypes.string,
});

// Either logoutUrl, either user
Header.propTypes = {
    logoutUrl: PropTypes.string,
    title: PropTypes.node,
    userInformation: PropTypes.node,
    user: userType,
    additionalAction: PropTypes.element,
};
