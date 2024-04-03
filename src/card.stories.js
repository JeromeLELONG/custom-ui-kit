import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
    GhostCard,
    Card,
    PrimaryCard,
    SecondaryCard,
    CardTitle,
    CardSubTitle,
} from './card';

const stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

stories.add(
    'GhostCard',
    withInfo({ inline: true })(() => (
        <GhostCard>Contenu de la carte</GhostCard>
    )),
);

stories.add(
    'Card',
    withInfo({ inline: true })(() => <Card>Contenu de la carte</Card>),
);

stories.add(
    'PrimaryCard',
    withInfo({ inline: true })(() => (
        <PrimaryCard>Contenu de la carte</PrimaryCard>
    )),
);

stories.add(
    'PrimaryCard with title and subtitle',
    withInfo({ inline: true })(() => (
        <PrimaryCard>
            <CardTitle>Titre</CardTitle>
            <CardSubTitle>Titre</CardSubTitle>
        </PrimaryCard>
    )),
);

stories.add(
    'SecondaryCard',
    withInfo({ inline: true })(() => (
        <SecondaryCard>Contenu de la carte</SecondaryCard>
    )),
);
