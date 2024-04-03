import React from 'react';
import { mount } from 'enzyme';

import { LoggedUser } from './LoggedUser';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

describe('<LoggedUser />', () => {
    const defaultProps = {
        logoutUrl: '/logout',
        name: 'John Doe',
        profile: 'Student',
    };

    it('should display user name and role', () => {
        const props = { ...defaultProps, name: 'John Doe', profile: 'student' };
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <LoggedUser {...props} />
            </ThemeProvider>
        );

        expect(wrapper.text()).toContain('John Doe (student)');
    });

    it('should allow user to logout', () => {
        const props = { ...defaultProps, logoutUrl: '/logout' };
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <LoggedUser {...props} />
            </ThemeProvider>
        );

        expect(wrapper.find('a[href="/logout"]')).toHaveLength(1);
    });
});
