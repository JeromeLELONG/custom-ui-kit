import styled from 'styled-components';

export const AssignmentList = styled.ol`
    list-style-type: none;
    font-family: 'Open Sans';
    margin: 0;

    & + * {
        margin-top: ${({ theme }) => theme.spacing.l};
    }

    & li {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
    }
`;
