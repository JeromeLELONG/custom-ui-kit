import { darken } from 'polished';
import styled from 'styled-components';

export const Input = styled.input`
    color: ${({ theme }) => theme.colors.black};
    border: none;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme: t }) => darken(0.2, t.colors.lightGrey)};
    border-radius: ${({ theme }) => theme.spacing.xxs};
    display: inline-flex;
    font: ${({ theme }) => theme.fonts.copy};
    margin: 0;
    padding: 0;
    padding-top: ${({ theme }) => theme.spacing.xs};
    padding-bottom: ${({ theme }) => theme.spacing.xs};
    padding-left: ${({ theme }) => theme.spacing.xs};
    padding-right: 0;
    transition-property: all;
    transition-duration: ${({ theme }) => theme.transitions.duration};
    transition-timing-function: ${({ theme }) => theme.transitions.ease};
    -webkit-appearance: none;

    background-color: ${({ valueChanged, theme: t }) =>
        valueChanged ? t.colors.warmGrey11c : t.colors.lightGrey};

    &:focus {
        background: ${({ theme: t }) => darken(0.2, t.colors.lightGrey)};
    }

    width: 100%;
`;

Input.displayName = 'Input';
