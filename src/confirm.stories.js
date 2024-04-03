import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ConfirmButton } from './confirm';
import { GhostButton } from './buttons';

const stories = storiesOf('Confirm', module);

stories.add(
    'ConfirmButton',
    withInfo({
        inline: true,
        source: false,
        text: `
~~~jsx
const ButtonWithErrorContainer = styled.div\`
    display: flex;
        flex-direction: column;
        align-items: center;
\`;

export const DeleteUserButtonView = ({ error, deleting, onDelete }) => (
    <ConfirmButton onConfirm={() => onDelete()}>
        {({ handleRequestConfirm }) => (
            <ButtonWithErrorContainer>
                <GhostButton
                    data-testid="button-request-delete"
                    onClick={handleRequestConfirm}
                >
                    {deleting && <span>Suppression...</span>}
                    {!deleting && <span>Supprimer</span>}
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
~~~
`,
    })(() => (
        <ConfirmButton onConfirm={() => console.log('Action confirmed')}>
            {({ handleRequestConfirm }) => (
                <GhostButton
                    data-testid="button-request-delete"
                    onClick={handleRequestConfirm}
                >
                    Supprimer
                </GhostButton>
            )}
        </ConfirmButton>
    )),
);
