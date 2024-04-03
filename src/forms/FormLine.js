import styled from 'styled-components';

export const FormLine = styled.div`
    display: flex;

    & > div {
        flex-basis: 50%;
    }
    & > div + * {
        margin-left: ${({ theme }) => theme.spacing.s};
    }
`;
