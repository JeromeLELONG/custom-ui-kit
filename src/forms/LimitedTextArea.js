import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { Input } from './Input';
import styled from 'styled-components';

const StyledTextArea = Input.withComponent('textarea');

const Limit = styled.p`
    text-align: right;
    font-size: 0.875rem;
    margin-top: 0;
`;

export class LimitedTextArea extends React.PureComponent {
    state = {
        numberChars: get(this.props, 'value.length', 0),
    };

    static propTypes = {
        limit: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.any,
    };

    onChange = event => {
        const value = event.target.value.slice(0, this.props.limit);

        this.setState({ numberChars: value.length });
        this.props.onChange(value);
    };

    render() {
        const { limit, ...otherProps } = this.props;

        return (
            <div>
                <StyledTextArea {...otherProps} onChange={this.onChange} />
                <Limit>
                    Caractères : {this.state.numberChars} / {limit}
                </Limit>
            </div>
        );
    }
}
