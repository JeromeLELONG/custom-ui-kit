import styled from 'styled-components';

export const MaxWidthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: ${({ theme }) => theme.maxScreenWidth};
    width: 100%;
    height: auto;
    min-height: 100%;
`;

MaxWidthContainer.displayName = 'MaxWidthContainer';
