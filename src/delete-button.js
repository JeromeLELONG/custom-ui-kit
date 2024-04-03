import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { GhostButton } from './buttons';
import { ConfirmButton } from './confirm';
import { ErrorMessage } from './error-message';
import styled from 'styled-components';

const ButtonWithErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DeleteButton = ({ error, deleting, onDelete }) => (
    <ConfirmButton onConfirm={() => onDelete()}>
        {({ handleRequestConfirm }) => (
            <ButtonWithErrorContainer>
                <GhostButton
                    data-testid="button-request-delete"
                    onClick={handleRequestConfirm}
                >
                    {deleting && <Fragment>Suppression...</Fragment>}
                    {!deleting && <Fragment>Supprimer</Fragment>}
                </GhostButton>
                {error && (
                    <ErrorMessage data-testid="error-message">
                        {error}
                    </ErrorMessage>
                )}
            </ButtonWithErrorContainer>
        )}
    </ConfirmButton>
);

DeleteButton.propTypes = {
    error: PropTypes.string,
    deleting: PropTypes.bool,
    onDelete: PropTypes.func,
};
