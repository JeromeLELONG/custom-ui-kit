import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Title } from './title';

const stories = storiesOf('Primitives', module);
stories.addDecorator(withKnobs);

stories.add('Title', withInfo({ inline: true })(() => <Title>Un titre</Title>));
