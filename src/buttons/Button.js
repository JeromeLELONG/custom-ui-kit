import styled, { css } from 'styled-components';
import { BaseButton } from './BaseButton';
import { darken, lighten } from 'polished';

export const button = css`
    ${BaseButton}
    padding-left: ${({ theme }) => theme.spacing.l};
    padding-right: ${({ theme }) => theme.spacing.l};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

    &:focus {
        background-color: ${({ theme }) =>
            darken(0.1)(theme.colors.warmGrey4c)};
    }
    &:hover {
        background-color: ${({ theme }) =>
            darken(0.1)(theme.colors.warmGrey4c)};
    }
    &:active {
        background-color: ${({ theme }) =>
            darken(0.2)(theme.colors.warmGrey4c)};
    }
    &[disabled] {
        background-color: ${({ theme }) =>
            lighten(0.1)(theme.colors.warmGrey4c)};
    }
`;

export const Button = styled.button`
    ${button};
`;

Button.displayName = 'Button';
