import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    table-layout: auto;

    thead,
    tbody {
        th,
        td {
            border-style: solid none solid none;
            border-width: 1px;
            padding-bottom: ${({ condensed, theme }) =>
                theme.spacing[condensed ? 'xxs' : 's']};
            padding-top: ${({ condensed, theme }) =>
                theme.spacing[condensed ? 'xxs' : 's']};
            padding-left: ${({ condensed, theme }) =>
                theme.spacing[condensed ? 'xs' : 'm']};
            padding-right: ${({ condensed, theme }) =>
                theme.spacing[condensed ? 'xs' : 'm']};
        }

        th {
            border-top-style: none;
            border-color: ${({ theme }) => theme.colors.lightGrey};
            color: ${({ theme }) => theme.colors.black};
            text-align: left;
            text-transform: uppercase;
            font-size: 0.8em;
        }

        td {
            border-color: ${({ theme }) => theme.colors.lightGrey};
            background-color: ${({ theme }) => theme.colors.white};
        }
    }
`;

Table.displayName = 'Table';
