import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldContainer } from './FormFieldContainer';
import { FormLabel } from './FormLabel';
import { FormErrorMessage } from './FormErrorMessage';

export const FormField = ({ children, input, label, meta, ...props }) => (
    <FormFieldContainer {...props}>
        <FormLabel htmlFor={input.name} hasError={meta.touched && meta.error}>
            {label}
        </FormLabel>
        {children({ input, meta })}
        {meta.touched &&
            meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormFieldContainer>
);

FormField.propTypes = {
    children: PropTypes.func.isRequired,
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
};
