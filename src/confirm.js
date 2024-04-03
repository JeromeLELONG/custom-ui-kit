import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GhostButton } from './buttons';

export class Confirm extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired,
        renderConfirm: PropTypes.func.isRequired,
        onCancel: PropTypes.func,
        onConfirm: PropTypes.func.isRequired,
        onRequestConfirm: PropTypes.func,
    };

    state = { confirm: false };

    handleRequestConfirm = () => {
        const { onRequestConfirm } = this.props;
        this.setState({ confirm: true });

        if (onRequestConfirm) {
            onRequestConfirm();
        }
    };

    handleConfirm = () => {
        const { onConfirm } = this.props;
        this.setState({ confirm: false });

        onConfirm();
    };

    handleCancel = () => {
        const { onCancel } = this.props;
        this.setState({ confirm: false });

        if (onCancel) {
            onCancel();
        }
    };

    render() {
        const { confirm } = this.state;
        const { render, renderConfirm } = this.props;

        if (confirm) {
            return renderConfirm({
                handleConfirm: this.handleConfirm,
                handleCancel: this.handleCancel,
            });
        }

        return render({
            handleRequestConfirm: this.handleRequestConfirm,
        });
    }
}

const MultipleButtonsContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;

export const ConfirmButton = ({ children, onConfirm }) => {
    return (
        <MultipleButtonsContainer>
            <Confirm
                onConfirm={onConfirm}
                render={({ handleRequestConfirm }) => (
                    <ButtonContainer>
                        {children({
                            handleRequestConfirm,
                        })}
                    </ButtonContainer>
                )}
                renderConfirm={({ handleCancel, handleConfirm }) => (
                    <Fragment>
                        <GhostButton
                            data-testid="button-confirm"
                            onClick={handleConfirm}
                        >
                            Confirmer
                        </GhostButton>
                        <GhostButton
                            data-testid="button-cancel"
                            onClick={handleCancel}
                        >
                            Annuler
                        </GhostButton>
                    </Fragment>
                )}
            />
        </MultipleButtonsContainer>
    );
};

ConfirmButton.propTypes = {
    children: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};
