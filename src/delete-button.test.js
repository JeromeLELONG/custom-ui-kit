import React from 'react';
import { waitForElement } from 'dom-testing-library';
import { fireEvent, renderIntoDocument, wait } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { DeleteButton } from './delete-button';

describe('DeleteButton', () => {
    it('shows confirmation buttons when clicked', async () => {
        const { container, getByTestId } = renderIntoDocument(
            <ThemeProvider theme={theme}>
                <DeleteButton />
            </ThemeProvider>,
        );
        const buttonRequestDelete = getByTestId('button-request-delete');
        fireEvent(
            buttonRequestDelete,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );

        await waitForElement(() => getByTestId('button-confirm'), container);
        await waitForElement(() => getByTestId('button-cancel'), container);
        await wait(
            () =>
                container.querySelectorAll(
                    '[data-testid="button-request-delete"]',
                ).length === 0,
        );
    });

    it('shows back request delete button when cancel is clicked', async () => {
        const { container, getByTestId } = renderIntoDocument(
            <ThemeProvider theme={theme}>
                <DeleteButton />
            </ThemeProvider>,
        );
        const buttonRequestDelete = getByTestId('button-request-delete');
        fireEvent(
            buttonRequestDelete,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );

        const buttonCancelDelete = await waitForElement(
            () => getByTestId('button-cancel'),
            container,
        );
        await wait(
            () =>
                container.querySelectorAll(
                    '[data-testid="button-request-delete"]',
                ).length === 0,
        );

        fireEvent(
            buttonCancelDelete,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );

        await wait(
            () =>
                container.querySelectorAll(
                    '[data-testid="button-request-delete"]',
                ).length === 1,
        );
        await wait(
            () =>
                container.querySelectorAll('[data-testid="button-cancel"]')
                    .length === 1,
        );
    });

    it('triggers onDelete when confirm is clicked', async () => {
        const onDelete = jest.fn();

        const { container, getByTestId } = renderIntoDocument(
            <ThemeProvider theme={theme}>
                <DeleteButton onDelete={onDelete} />
            </ThemeProvider>,
        );
        const buttonRequestDelete = getByTestId('button-request-delete');
        fireEvent(
            buttonRequestDelete,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );

        const buttonConfirmDelete = await waitForElement(
            () => getByTestId('button-confirm'),
            container,
        );
        await wait(
            () =>
                container.querySelectorAll(
                    '[data-testid="button-request-delete"]',
                ).length === 0,
        );

        fireEvent(
            buttonConfirmDelete,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );

        expect(onDelete).toHaveBeenCalled();
    });
});
