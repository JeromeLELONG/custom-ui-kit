import styled from 'styled-components';
import { darken } from 'polished';

export const A = styled.a`
    padding-left: 0;
    padding-right: 0;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
    text-decoration: none;
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => darken(0.2)(theme.colors.blue)};
    }
    &:active {
        background-color: transparent;
        color: ${({ theme }) => darken(0.2)(theme.colors.blue)};
    }
`;
