import { css } from 'styled-components';

export const BaseButton = css`
    border: none;
    border-radius: ${({ theme }) => theme.spacing.xxs};
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    font: ${({ theme }) => theme.fonts.button};
    outline: none;
    padding-top: ${({ theme }) => theme.spacing.xxs};
    padding-bottom: ${({ theme }) => theme.spacing.xxs};
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition-property: all;
    transition-duration: ${({ theme }) => theme.transitions.duration};
    transition-timing-function: ${({ theme }) => theme.transitions.ease};
    white-space: nowrap;

    padding-left: ${({ condensed, theme }) => theme.spacing[condensed ? 'xs' : 'l']};
    padding-right: ${({ condensed, theme }) => theme.spacing[condensed ? 'xs' : 'l']};
`;
