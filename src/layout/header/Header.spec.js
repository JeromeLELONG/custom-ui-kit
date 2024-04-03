import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('<Header />', () => {
    
    it('should display user only if any [deprecated api]', () => {
        const test = (user, expectedLoggedUserLength) => {
            const defaultProps = {
                user: null,
            };
            const props = { ...defaultProps, user };
            const wrapper = shallow(
                    <Header {...props} />
            );

            expect(wrapper.find('LoggedUser')).toHaveLength(expectedLoggedUserLength);
        };

        test(null, 0);
        test({
            logoutUrl: '/logout',
            name: 'John Doe',
            profile: 'student',
        }, 1);
    });

    it('should display user only if any', () => {
        const test = (headerProps, expectedLoggedUserLength) => {
            const wrapper = shallow(
                    <Header {...headerProps} />
            );

            expect(wrapper.find('LoggedUser')).toHaveLength(expectedLoggedUserLength);
        };

        test(null, 0);
        test({logoutUrl: '/logout',}, 1);
        test({logoutUrl: '/logout', title: 'This is the title'}, 1);
        test({logoutUrl: '/logout', title: 'This is the title', userInformation: 'John Dow (student)'}, 1);
    });

});
