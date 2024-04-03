import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: -10%;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    background-size: cover;
    width: 110%;
    height: 100%;
    clip-path: polygon(20% 120%, 120% 0%, 0% 0%);
    z-index: -1;
`;

Background.displayName = 'Background'
