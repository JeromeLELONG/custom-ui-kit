'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('./Header');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Header />', function () {

    it('should display user only if any [deprecated api]', function () {
        var test = function test(user, expectedLoggedUserLength) {
            var defaultProps = {
                user: null
            };
            var props = _extends({}, defaultProps, { user: user });
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header.Header, props));

            expect(wrapper.find('LoggedUser')).toHaveLength(expectedLoggedUserLength);
        };

        test(null, 0);
        test({
            logoutUrl: '/logout',
            name: 'John Doe',
            profile: 'student'
        }, 1);
    });

    it('should display user only if any', function () {
        var test = function test(headerProps, expectedLoggedUserLength) {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header.Header, headerProps));

            expect(wrapper.find('LoggedUser')).toHaveLength(expectedLoggedUserLength);
        };

        test(null, 0);
        test({ logoutUrl: '/logout' }, 1);
        test({ logoutUrl: '/logout', title: 'This is the title' }, 1);
        test({ logoutUrl: '/logout', title: 'This is the title', userInformation: 'John Dow (student)' }, 1);
    });
});