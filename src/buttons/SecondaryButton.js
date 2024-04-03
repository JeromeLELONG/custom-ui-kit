import styled, { css } from 'styled-components';

import { BaseButton } from './BaseButton';
import { darken, lighten } from 'polished';

export const secondaryButton = css`
    ${BaseButton}
    padding-left: ${({ theme }) => theme.spacing.l};
    padding-right: ${({ theme }) => theme.spacing.l};

    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
    &:focus {
        color: ${({ theme }) => darken(0.3)(theme.colors.blue)};
        background-color: ${({ theme }) => theme.colors.lightGrey};
    }
    &:hover {
        color: ${({ theme }) => darken(0.3)(theme.colors.blue)};
        background-color: ${({ theme }) => theme.colors.lightGrey};
    }
    &:active {
        color: ${({ theme }) => darken(0.5)(theme.colors.blue)};
    }
    &[disabled] {
        color: ${({ theme }) => lighten(0.3)(theme.colors.blue)};
    }
`;

export const SecondaryButton = styled.button`
    ${secondaryButton};
`;

SecondaryButton.displayName = 'SecondaryButton';
