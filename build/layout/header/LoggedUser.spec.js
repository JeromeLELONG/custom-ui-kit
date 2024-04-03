'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _LoggedUser = require('./LoggedUser');

var _styledComponents = require('styled-components');

var _theme = require('../../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<LoggedUser />', function () {
    var defaultProps = {
        logoutUrl: '/logout',
        name: 'John Doe',
        profile: 'Student'
    };

    it('should display user name and role', function () {
        var props = _extends({}, defaultProps, { name: 'John Doe', profile: 'student' });
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: _theme.theme },
            _react2.default.createElement(_LoggedUser.LoggedUser, props)
        ));

        expect(wrapper.text()).toContain('John Doe (student)');
    });

    it('should allow user to logout', function () {
        var props = _extends({}, defaultProps, { logoutUrl: '/logout' });
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: _theme.theme },
            _react2.default.createElement(_LoggedUser.LoggedUser, props)
        ));

        expect(wrapper.find('a[href="/logout"]')).toHaveLength(1);
    });
});