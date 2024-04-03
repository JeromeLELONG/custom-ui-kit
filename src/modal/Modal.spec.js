import React from 'react';
import { renderIntoDocument, fireEvent, wait } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import { Modal } from './Modal';

describe('Modal', () => {
    it('should render a Modal with its content', () => {
        const { getByTestId } = renderIntoDocument(
            <ThemeProvider theme={theme}>
                <Modal>
                    <span data-testid="content">Modals are bad UI</span>
                </Modal>
            </ThemeProvider>,
        );

        expect(getByTestId('content').textContent).toBe('Modals are bad UI');
    });

    it('should call onClose prop when clicking on the close button', async () => {
        const onClose = jest.fn();
        const { getByTestId } = renderIntoDocument(
            <ThemeProvider theme={theme}>
                <Modal onClose={onClose}>
                    <span>Modals are bad UI</span>
                </Modal>
            </ThemeProvider>,
        );

        getByTestId('close-button').click();
        expect(onClose).toHaveBeenCalled();
    });

    it('should not allow to close if the modal is not closable', () => {
        const { getByTestId } = renderIntoDocument(
            <ThemeProvider theme={theme}>
                <Modal closable={false}>
                    <span>Modals are bad UI</span>
                </Modal>
            </ThemeProvider>,
        );

        expect(() => {
            getByTestId('close-button');
        }).toThrow();
    });
});
