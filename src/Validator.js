import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import { DangerButton, PrimaryButton, GhostButton } from './buttons';
import { SuccessIcon, CrossIcon, ArrowLeftIcon } from './icons';
import styled from 'styled-components';
import { Input, FormLabel, FormErrorMessage } from './forms';

const WithMarginDangerButton = styled(DangerButton)`
    margin-right: ${({ theme }) => theme.spacing.xs}
`;

const Label = styled(FormLabel)`
    display: flex;
    align-items: center;
    margin-bottom: 0;
    font-size: 1rem;
`;

Label.displayName = 'Label';

const CommentRow = styled.div`
    display: flex;
    align-items: center;
    & > *:first-child {
        flex: 1 0 0;
        margin-right: ${({ theme }) => theme.spacing.s};
    }

    & > *:last-child {
        flex: 0 0 64px;
    }
`;

export class Validator extends React.PureComponent {
    state = {
        intent: null,
        error: null,
        reason: '',
    }

    id = uuid.v4();

    static propTypes = {
        commentable: PropTypes.bool,
        onAccepted: PropTypes.func.isRequired,
        onRejected: PropTypes.func.isRequired,
        decisionLabel: PropTypes.func,
        errorLabel: PropTypes.func,
        submitLabel: PropTypes.func,
    };

    static defaultProps = {
        commentable: true,
        decisionLabel: intent => `Pourquoi ${intent === 'reject' ? 'refusez' : 'acceptez'}-vous cette demande ?`,
        errorLabel: () => 'La motivation de votre décision est obligatoire.',
        submitLabel: intent => intent === 'reject' ? 'Refuser' : 'Accepter',
    }

    handleResetIntent = () => {
        this.setState({ intent: null, reason: '' });
    }

    handleRejectedClick = () => {
        if (!this.props.commentable) {
            this.props.onRejected();
            return;
        }

        if (!this.state.intent) {
            this.setState({ intent: 'reject' });
            return;
        }
    };

    handleAcceptedClick = () => {
        if (!this.props.commentable) {
            this.props.onAccepted();
            return;
        }

        if (this.props.commentable && !this.state.intent) {
            this.setState({ intent: 'accept' });
            return;
        }
    };

    handleReasonChange = e => {
        this.setState({ reason: e.target.value });
    }

    handleReasonSubmit = e => {
        const { errorLabel } = this.props;
        const { intent, reason } = this.state;

        if (!reason) {
            this.setState({ error: errorLabel });
            return;
        }

        this.props[intent === 'reject' ? 'onRejected' : 'onAccepted'](e, reason);
    };

    render() {
        const { decisionLabel, submitLabel } = this.props;
        const { error, intent } = this.state;

        return (
            <div>
                {!intent && (
                    <div>
                        <WithMarginDangerButton condensed onClick={this.handleRejectedClick}>
                            <CrossIcon width={12} />
                        </WithMarginDangerButton>
                        <PrimaryButton condensed onClick={this.handleAcceptedClick}>
                            <SuccessIcon width={14} />
                        </PrimaryButton>
                    </div>
                )}
                {intent && (
                    <form action="#" onSubmit={this.handleReasonSubmit}>
                        <Label htmlFor={this.id}>
                            <GhostButton onClick={this.handleResetIntent} condensed>
                                <ArrowLeftIcon onClick={this.handleResetIntent} />
                            </GhostButton>
                            {decisionLabel(intent)}
                        </Label>
                        <CommentRow>
                            <div>
                                <Input id={this.id} onChange={this.handleReasonChange} value={this.state.reason} />
                            </div>
                            {intent === 'reject' ? (
                                <DangerButton type="submit">{submitLabel(intent)}</DangerButton>
                            ) : (
                                <PrimaryButton type="submit">{submitLabel(intent)}</PrimaryButton>
                            )}
                        </CommentRow>
                        {error && (
                            <FormErrorMessage>{error(intent)}</FormErrorMessage>
                        )}
                    </form>
                )}
            </div>
        )
    }
}
