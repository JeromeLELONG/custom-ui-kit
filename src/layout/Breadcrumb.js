import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
    display: flex;

    & > * + *:before {
        content: '>';
        margin-left: ${({ theme }) => theme.spacing.s};
        margin-right: ${({ theme }) => theme.spacing.s};
    }
`;

export const Breadcrumb = ({ items, lastItem, link }) =>
    items.length > 1 ? (
        <BreadcrumbContainer>
            {items.map(
                (item, index) => {
                    const element = (index < items.length - 1 ? link : lastItem)(item);
                    return React.cloneElement(element, { key: item.path });
                }
            )}
        </BreadcrumbContainer>
    ) : null;

Breadcrumb.propTypes = {
    link: PropTypes.func.isRequired,
    lastItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ),
};

Breadcrumb.displayName = 'Breadcrumb';
