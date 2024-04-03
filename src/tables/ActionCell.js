import styled from 'styled-components';

export const ActionCell = styled.td`
    & button,
    & a {
        margin: 0;
        padding-top: 0;
        padding-bottom: 0;
    }

    & > * + * {
        margin-left: ${({ theme }) => theme.spacing.xs};
    }
`;
