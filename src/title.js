import styled from 'styled-components';

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    font: ${({ theme }) => theme.fonts.title};
    margin-top: ${({ theme }) => theme.spacing.s};
    margin-bottom: ${({ theme }) => theme.spacing.s};
    margin-left: 0;
    margin-right: 0;
`;
