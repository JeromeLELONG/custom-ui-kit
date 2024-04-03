import classNames from 'classnames';
import debounce from 'lodash/debounce';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from '../forms';
import { GhostButton } from '../buttons';
import { Pagination } from '../pagination';

const TablePaginationFoot = styled.tfoot`
    & tr:first-child td {
        padding-top: ${({ theme }) => theme.spacing.l};
    }
    & td {
        padding-top: ${({ theme }) => theme.spacing.s};
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        border: none;
        color: ${({ theme }) => theme.colors.black};
        text-align: center;

        > button {
            display: inline-flex;
            font-weight: normal;
            font-size: ${({ theme }) => theme.fontSizes.s};
            padding-left: ${({ theme }) => theme.spacing.xs};
            padding-right: ${({ theme }) => theme.spacing.xs};
            width: auto;

            &.current {
                font-weight: bold;
            }
        }
    }
`;

TablePaginationFoot.displayName = 'TablePaginationFoot';

const TablePaginationSummary = styled.td`
    & > * {
        display: flex;
        justify-content: space-between;

        span {
            font: ${({ theme }) => theme.fonts.button};
            font-size: ${({ theme }) => theme.fontSizes.s};
            padding-left: ${({ theme }) => theme.spacing.xs};
            padding-right: ${({ theme }) => theme.spacing.xs};
        }
    }
`;

TablePaginationSummary.displayName = 'TablePaginationSummary';

const PageSelector = styled.label`
    font-weight: normal;
    color: ${({ theme }) => theme.colors.blue};
    font: ${({ theme }) => theme.fonts.button};
    text-transform: uppercase;
    padding-left: ${({ theme }) => theme.spacing.l};
    padding-right: ${({ theme }) => theme.spacing.l};
    > input {
        font-size: ${({ theme }) => theme.fontSizes.m};
        width: 4rem !important;
    }
`;

PageSelector.displayName = 'PageSelector';

export const TablePagination = ({ numberColumns, onChange, pageIndex = 0, pageSize = 0, total = 0 }) => (
    <Pagination onChange={onChange} pageIndex={pageIndex} pageSize={pageSize} total={total}>
        {({
            goToFirstPage,
            goToLastPage,
            goToNextPage,
            goToPage,
            goToPreviousPage,
            maxPageIndex,
            pageIndex,
            pageSize,
        }) => {
            const debouncedGoToPage = debounce(goToPage, 500);
            const pageStartIndex = pageIndex * pageSize + 1;
            const pageEndIndex = Math.min(pageIndex * pageSize + pageSize, total);

            return (
                (maxPageIndex > 1 || pageIndex > 0) && (
                    <TablePaginationFoot>
                        <tr>
                            <TablePaginationSummary colSpan={numberColumns}>
                                <div>
                                    <span>
                                        {pageStartIndex} à {pageEndIndex} sur {total}
                                    </span>
                                    <span>
                                        Page {pageIndex + 1}
                                        {maxPageIndex > 10 ? ` / ${maxPageIndex}` : ''}
                                    </span>
                                </div>
                            </TablePaginationSummary>
                        </tr>
                        <tr>
                            {maxPageIndex <= 10 && (
                                <td colSpan={numberColumns}>
                                    {Array.from(Array(maxPageIndex).keys()).map(index => (
                                        <GhostButton
                                            className={classNames({
                                                current: index === pageIndex,
                                            })}
                                            key={index}
                                            onClick={() => goToPage(index)}
                                        >
                                            {index + 1}
                                        </GhostButton>
                                    ))}
                                </td>
                            )}
                            {maxPageIndex > 10 && (
                                <td colSpan={numberColumns}>
                                    <GhostButton
                                        className={classNames({
                                            current: pageIndex === 1,
                                        })}
                                        onClick={() => goToFirstPage()}
                                    >
                                        Première page
                                    </GhostButton>
                                    {pageIndex >= 1 && (
                                        <GhostButton onClick={() => goToPreviousPage()}>
                                            {'<'} Page précédente
                                        </GhostButton>
                                    )}
                                    <PageSelector>
                                        Aller à la page{' '}
                                        <Input
                                            type="number"
                                            step="1"
                                            min="1"
                                            max={maxPageIndex}
                                            onChange={({ target }) => {
                                                const selectedPage =
                                                    target.value >= 1 ? target.value - 1 : pageIndex || 0;
                                                debouncedGoToPage(selectedPage);
                                            }}
                                        />
                                    </PageSelector>
                                    {pageIndex < maxPageIndex - 1 && (
                                        <GhostButton onClick={() => goToNextPage()}>Page suivante {'>'}</GhostButton>
                                    )}
                                    <GhostButton
                                        className={classNames({
                                            current: pageIndex === maxPageIndex,
                                        })}
                                        onClick={() => goToLastPage()}
                                    >
                                        Dernière page
                                    </GhostButton>
                                </td>
                            )}
                        </tr>
                    </TablePaginationFoot>
                )
            );
        }}
    </Pagination>
);

TablePagination.propTypes = {
    numberColumns: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    pageIndex: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number,
};
