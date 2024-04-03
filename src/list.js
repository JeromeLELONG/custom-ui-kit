import styled from 'styled-components';

export const List = styled.ol`
    display: flex;
    flex-direction: ${({ mode = 'vertical' }) =>
        mode === 'horizontal' ? 'row' : 'column'};
    list-style-type: none;
    padding: 0;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: ${({ mode = 'vertical', theme }) =>
        mode === 'horizontal' ? 0 : theme.spacing.l};
    justify-content: ${({ mode = 'vertical' }) =>
        mode === 'horizontal' ? 'space-evenly' : 'unset'};

    & > li {
        margin-top: ${({ mode = 'vertical', theme }) =>
            mode === 'horizontal' ? 0 : theme.spacing.xs};
        margin-left: ${({ theme }) => theme.spacing.m};
        margin-right: ${({ mode = 'vertical', theme }) =>
            mode === 'horizontal' ? theme.spacing.xs : 0};
        margin-bottom: ${({ mode = 'vertical', theme }) =>
            mode === 'horizontal' ? 0 : theme.spacing.l};
    }
`;

export const ListTitle = styled.h3`
    border-bottom: solid 1px ${({ theme }) => theme.colors.warmGrey8c};
    color: ${({ theme }) => theme.colors.warmGrey8c};
    font: ${({ theme }) => theme.fonts.copy};
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: bold;
    margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
`;

export const ListItemTitle = styled.h4`
    color: ${({ theme }) => theme.colors.warmGrey8c};
    font: ${({ theme }) => theme.fonts.copy};
    margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
`;
