import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import { BaseButton } from './BaseButton';

export const ghostButton = css`
    ${BaseButton} background-color: transparent;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;

    ToolbarLink &:focus {
        background-color: transparent;
        color: ${({ theme }) => darken(0.1)(theme.colors.blue)};
    }
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => darken(0.2)(theme.colors.blue)};
    }
    &:active {
        background-color: transparent;
        color: ${({ theme }) => darken(0.2)(theme.colors.blue)};
    }
    &[disabled] {
        background-color: transparent;
        color: ${({ theme }) => lighten(0.2)(theme.colors.blue)};
    }
`;

export const GhostButton = styled.button`
    ${ghostButton};
`;

GhostButton.displayName = 'GhostButton';
