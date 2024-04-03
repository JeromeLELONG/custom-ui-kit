import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowDownIcon, ArrowUpIcon } from '../icons';
import { GhostButton } from '../buttons';

const Th = styled.th`
    button {
        opacity: 0.2;
        &.sorted {
            opacity: 1;
        }
        transition: 0.25s ease-in-out;
    }

    &:hover button {
        opacity: 0.8;
    }

    .rotate {
        transform: rotate(180deg);
    }
`;

Th.displayName = 'Th';

export class SortableHeader extends React.Component {
    handleClick = () => {
        const { onChange, order } = this.props;
        onChange(order === 'DESC' ? 'ASC' : 'DESC');
    };

    render() {
        const { children, order, sortLabel, ...otherProps } = this.props;

        return (
            <Th {...otherProps}>
                {children}
                <GhostButton
                    aria-label={sortLabel || `Trier par ordre ${order === 'ASC' ? 'descendant' : 'ascendant'}`}
                    onClick={this.handleClick}
                    className={classNames({
                        sorted: order !== null,
                        rotate: order === 'DESC',
                    })}
                >
                    {order === 'ASC' ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </GhostButton>
            </Th>
        );
    }
}

SortableHeader.propTypes = {
    children: PropTypes.node,
    sortLabel: PropTypes.string,
    order: PropTypes.oneOf([null, 'ASC', 'DESC']),
    onChange: PropTypes.func.isRequired,
};

export default SortableHeader;
