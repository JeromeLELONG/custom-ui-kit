import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import styled from 'styled-components';

import { Modal } from './Modal';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

const Header = styled.div`
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.s};
`;

const Headline = styled.div`
    display: flex;
`;

const Label = styled.div`
    display: block;
    font: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.fontSizes.m};

    ${({ theme }) => theme.medias.largerThanPhone} {
        font-size: ${({ theme }) => theme.fontSizes.l};
    }
`;

const Title = styled.div`
    flex: 1 0 0;
    font: ${({ theme }) => theme.fonts.appHeader};
`;

const Evaluation = styled.div`
    display: none;

    ${({ theme }) => theme.medias.largerThanPhone} {
        display: block;
        flex: 1 0 0;
        text-align: right;
    }
`;

const MobileOnly = styled.div`
    ${({ theme }) => theme.medias.largerThanPhone} {
        display: none;
    }
`;

stories
    .add('Modal (empty)', () => (
        <Modal
            closable={boolean('Closable', true)}
            closeOnEscape={boolean('Close on ESC', true)}
            onClose={action('closed')}
        >
            <pre>
                {`<Modal
    closable
    closeOnEscape
    onClose={console.log}
>
    {/* children */}
</Modal>`}
            </pre>
        </Modal>
    ))
    .add('Modal', () => (
        <Modal>
            <Header>
                <Headline>
                    <Title>TEC111</Title>
                    <Evaluation>Devoir 2</Evaluation>
                </Headline>
                <Label>Gestion juridique et fiscale</Label>
                <MobileOnly>Devoir 2</MobileOnly>
            </Header>
            <div>A rendre pour le: 30/10/2019</div>
        </Modal>
    ));
