import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import { TabsNavBar } from './TabsNavBar';
import { NavItem } from './NavItem';

storiesOf('Nav', module)
    .addDecorator(story => <MemoryRouter initialEntries={['/validate']}>{story()}</MemoryRouter>)
    .add('TabsNavBar', () => (
        <TabsNavBar>
            <NavItem to="/">Root</NavItem>
            <NavItem to="/treat">To do</NavItem>
            <NavItem to="/validate">To validate</NavItem>
            <NavItem to="/send">To send</NavItem>
        </TabsNavBar>
    ))
    .add('TabsNavBar (with exact set to false)', () => (
        <TabsNavBar>
            <NavItem exact={false} to="/">
                Root
            </NavItem>
            <NavItem to="/treat">To do</NavItem>
            <NavItem to="/validate">To validate</NavItem>
            <NavItem to="/send">To send</NavItem>
        </TabsNavBar>
    ));
