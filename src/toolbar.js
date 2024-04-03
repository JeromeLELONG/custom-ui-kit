import styled from 'styled-components';
import { A } from './A';

export const Toolbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ alignment = 'left' }) =>
        alignment === 'left' ? 'start' : 'end'};
    margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const ToolbarItem = styled.div`
    display: flex;
    flex-direction: column;

    & + * {
        margin-left: ${({ theme }) => theme.spacing.m};
    }
`;

export const ToolbarLink = A.extend`
    font-size: ${({ theme }) => theme.fontSizes.s};
`;
