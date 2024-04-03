import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { CrossIcon } from '../icons';
import { GhostButton } from '../buttons';

const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;

const Background = styled.div`
    width: 80vw;
    height: 70vh;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    margin-top: 15vh;
    border-radius: ${({ theme }) => theme.spacing.xxs};
    position: relative;
`;

const BackgroundEffect = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    background-size: cover;
    clip-path: polygon(20% 120%, 120% 0%, 0% 0%);
    border-radius: ${({ theme }) => theme.spacing.xxs};
    position: absolute;
    top: 0;
    left: 0;
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const Content = styled.div`
    margin: ${({ theme: { spacing } }) => `${spacing.l} ${spacing.xl}`};
    width: calc(100% - ${({ theme }) => `${theme.spaceBase * 13}`}ex);
    height: calc(100% - ${({ theme }) => `${theme.spaceBase * 8}`}ex);
`;

const CloseButton = styled(GhostButton)`
    position: absolute;
    top: 0;
    right: 0;
    padding: ${({ theme }) => theme.spacing.m};
`;

export class Modal extends Component {
    onKeyDown = evt => {
        const { closable, onClose } = this.props;

        // On ESC key down
        if (closable && evt.keyCode === 27) {
            onClose(evt);
        }
    };

    componentDidMount() {
        const { closable, closeOnEscape } = this.props;

        if (closable && closeOnEscape) {
            document.addEventListener('keydown', this.onKeyDown, false);
        }
    }

    componentWillUnmount() {
        const { closable, closeOnEscape } = this.props;

        if (closable && closeOnEscape) {
            document.removeEventListener('keydown', this.onKeyDown, false);
        }
    }

    render() {
        const { children, closable, onClose } = this.props;

        return (
            <Mask>
                <Background>
                    <BackgroundEffect />
                    <Container>
                        <Content>{children}</Content>
                    </Container>
                    {closable && (
                        <CloseButton onClick={onClose} data-testid="close-button">
                            <CrossIcon/>
                        </CloseButton>
                    )}
                </Background>
            </Mask>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    closable: PropTypes.bool,
    closeOnEscape: PropTypes.bool,
};

Modal.defaultProps = {
    onClose: () => {},
    closable: true,
    closeOnEscape: true,
};
