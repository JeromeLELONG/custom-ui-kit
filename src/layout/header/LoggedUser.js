import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const AppHeaderLink = styled.a`
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.fonts.button};
    font-size: ${({ theme }) => theme.fontSizes.m};
    text-transform: uppercase;
    text-decoration: none;
`;

const UserInformations = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.s};
    white-space: nowrap;
`;

const AppHeaderLogoutLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LoggedUser = ({ logoutUrl, name, profile, userInformation }) => (
    <AppHeaderLogoutLinkContainer>
        <AppHeaderLink href={logoutUrl}>Déconnexion</AppHeaderLink>
        <UserInformations>
            {!!userInformation ? userInformation : !!name && !!profile && `${name} (${profile})`}
        </UserInformations>
    </AppHeaderLogoutLinkContainer>
);

// Either renderUserInformation, either name and profile
LoggedUser.propTypes = {
    logoutUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    profile: PropTypes.string,
    userInformation: PropTypes.node,
};
