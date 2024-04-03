'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoggedUser = exports.AppHeaderLink = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    border: none;\n    background: none;\n    color: ', ';\n    font: ', ';\n    font-size: ', ';\n    text-transform: uppercase;\n    text-decoration: none;\n'], ['\n    border: none;\n    background: none;\n    color: ', ';\n    font: ', ';\n    font-size: ', ';\n    text-transform: uppercase;\n    text-decoration: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    white-space: nowrap;\n'], ['\n    font-size: ', ';\n    white-space: nowrap;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n'], ['\n    display: flex;\n    flex-direction: column;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppHeaderLink = exports.AppHeaderLink = _styledComponents2.default.a(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.white;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fonts.button;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fontSizes.m;
});

var UserInformations = _styledComponents2.default.span(_templateObject2, function (_ref4) {
    var theme = _ref4.theme;
    return theme.fontSizes.s;
});

var AppHeaderLogoutLinkContainer = _styledComponents2.default.div(_templateObject3);

var LoggedUser = exports.LoggedUser = function LoggedUser(_ref5) {
    var logoutUrl = _ref5.logoutUrl,
        name = _ref5.name,
        profile = _ref5.profile,
        userInformation = _ref5.userInformation;
    return _react2.default.createElement(
        AppHeaderLogoutLinkContainer,
        null,
        _react2.default.createElement(
            AppHeaderLink,
            { href: logoutUrl },
            'D\xE9connexion'
        ),
        _react2.default.createElement(
            UserInformations,
            null,
            !!userInformation ? userInformation : !!name && !!profile && name + ' (' + profile + ')'
        )
    );
};

// Either renderUserInformation, either name and profile
LoggedUser.propTypes = {
    logoutUrl: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string,
    profile: _propTypes2.default.string,
    userInformation: _propTypes2.default.node
};