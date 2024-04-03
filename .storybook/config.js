import { addDecorator, configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

import { themeDecorator } from './decorators';
import { withKnobs } from '@storybook/addon-knobs/dist/react';

function loadStories() {
    require('../src/navBar/stories');
    require('../src/icons/stories');
    require('../src/layout/stories');
    require('../src/buttons/stories');
    require('../src/forms/stories');
    require('../src/tables/stories');
    require('../src/modal/stories');
    require('../src/stories');
}

addDecorator(themeDecorator);
addDecorator(withKnobs);

setDefaults({
    inline: true,
    propTables: null,
    styles: {
        infoBody: {
            margin: 0,
        },
        header: {
            h1: {
                marginBottom: '2rem',
            }
        }
    },
});

configure(loadStories, module);
