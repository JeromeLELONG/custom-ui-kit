import styled from 'styled-components';

export const ButtonsBar = styled.div`
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.s};

    & * + * {
        margin-left: ${({ theme }) => theme.spacing.s};
    }
`;

ButtonsBar.displayName = 'ButtonsBar';
