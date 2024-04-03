import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import { BaseButton } from './BaseButton';

export const primaryButton = css`
    ${BaseButton}

    background-color: ${({ theme }) => theme.colors.blue};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

    color: ${({ theme }) => theme.colors.white};
    &:focus {
        background-color: ${({ theme }) => darken(0.1)(theme.colors.blue)};
    }
    &:hover {
        background-color: ${({ theme }) => darken(0.1)(theme.colors.blue)};
    }
    &:active {
        background-color: ${({ theme }) => darken(0.2)(theme.colors.blue)};
    }
    &[disabled] {
        color: ${({ theme }) => theme.colors.warmGrey8c};
        background-color: ${({ theme }) => lighten(0.3)(theme.colors.blue)};
    }

    & svg {
        fill: ${({ theme }) => theme.colors.white};
    }
`;

export const PrimaryButton = styled.button`
    ${primaryButton};
`;

PrimaryButton.displayName = 'PrimaryButton';
