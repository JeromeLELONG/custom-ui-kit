import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color, text } from '@storybook/addon-knobs';

import { Validator } from './Validator';
import { Progress } from './Progress';

const stories = storiesOf('Miscellaneous', module);
stories.addDecorator(withKnobs);

const submitValidation = intent => (e, reason) => {
    e.preventDefault();
    console.log(`${intent}: ${reason}`);
};

stories
    .add('Validator', () => (
        <div style={{ maxWidth: 500 }}>
            <Validator
                commentable
                onAccepted={submitValidation('accepted')}
                onRejected={submitValidation('rejected')}
            />
        </div>
    ))
    .add('Progress', () => (
        <Progress
            value={number('Value', 80)}
            max={number('Max', 100)}
            color={color('Color')}
            backgroundColor={color('Background Color')}
            label={text('Label', 'Loading, please wait...')}
        />
    ));
