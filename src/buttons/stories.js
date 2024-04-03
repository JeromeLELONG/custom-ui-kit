import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { GhostButton } from './GhostButton';
import { ButtonsBar } from './ButtonsBar';
import { DangerButton } from './DangerButton';

storiesOf('Buttons', module)
    .add('Primary Button', () => <PrimaryButton>Primary Button</PrimaryButton>)
    .add('Condensed Button', () => <PrimaryButton condensed>Condensed</PrimaryButton>)
    .add('Secondary Button', () => <SecondaryButton>Secondary Button</SecondaryButton>)
    .add('Danger Button', () => <DangerButton>Danger Button</DangerButton>)
    .add('Default Button', () => <Button>Button</Button>)
    .add('Ghost Button', () => <GhostButton>Ghost Button</GhostButton>)
    .add('Buttons Bar', () => (
        <ButtonsBar>
            <SecondaryButton>Reset</SecondaryButton>
            <PrimaryButton>Save</PrimaryButton>
        </ButtonsBar>
    ));
