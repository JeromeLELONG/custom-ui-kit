import styled from 'styled-components';

export const ErrorMessage = styled.p.attrs({ role: 'alert' })`
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-style: italic;
    color: ${({ theme }) => theme.colors.primaryRed};
    svg {
        margin-right: ${({ theme }) => theme.spacing.xs};
    }
`;
