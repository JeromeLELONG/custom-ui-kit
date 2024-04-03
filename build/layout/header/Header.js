'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    height: ', ';\n    flex-grow: 0;\n\n    & path {\n        fill: ', ';\n    }\n'], ['\n    height: ', ';\n    flex-grow: 0;\n\n    & path {\n        fill: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    padding: ', ' 0;\n    position: ', ';\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 10;\n'], ['\n    background-color: ', ';\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    padding: ', ' 0;\n    position: ', ';\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 10;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ', ';\n'], ['\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    align-items: center;\n    display: flex;\n    font: ', ';\n    margin: 0;\n    white-space: nowrap;\n'], ['\n    align-items: center;\n    display: flex;\n    font: ', ';\n    margin: 0;\n    white-space: nowrap;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    > * {\n        margin: 0 1ex;\n    }\n'], ['\n    display: flex;\n    align-items: center;\n    > * {\n        margin: 0 1ex;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MaxWidthContainer = require('../MaxWidthContainer');

var _cnamLogo = require('../../cnam-logo');

var _LoggedUser = require('./LoggedUser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppHeaderLogo = (0, _styledComponents2.default)(_cnamLogo.CnamLogo)(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.fontSizes.m;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.white;
});

var AppHeaderContainer = _styledComponents2.default.header(_templateObject2, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.primaryRed;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.s;
}, function (_ref5) {
    var _ref5$mode = _ref5.mode,
        mode = _ref5$mode === undefined ? 'fixed' : _ref5$mode;
    return mode.toString();
});

var AppInnerContainer = _styledComponents2.default.div(_templateObject3, function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.white;
});

var AppHeaderTitleContainer = _styledComponents2.default.h1(_templateObject4, function (_ref7) {
    var theme = _ref7.theme;
    return theme.fonts.appHeader;
});

var ActionContainer = _styledComponents2.default.div(_templateObject5);

var Header = exports.Header = function Header(_ref8) {
    var user = _ref8.user,
        logoutUrl = _ref8.logoutUrl,
        title = _ref8.title,
        userInformation = _ref8.userInformation,
        additionalAction = _ref8.additionalAction;
    return _react2.default.createElement(
        AppHeaderContainer,
        null,
        _react2.default.createElement(
            _MaxWidthContainer.MaxWidthContainer,
            null,
            _react2.default.createElement(
                AppInnerContainer,
                null,
                _react2.default.createElement(
                    AppHeaderTitleContainer,
                    null,
                    _react2.default.createElement(AppHeaderLogo, null),
                    title
                ),
                _react2.default.createElement(
                    ActionContainer,
                    null,
                    additionalAction,
                    !!logoutUrl ? _react2.default.createElement(_LoggedUser.LoggedUser, { logoutUrl: logoutUrl, userInformation: userInformation }) : !!user && _react2.default.createElement(_LoggedUser.LoggedUser, _extends({}, user, { userInformation: userInformation }))
                )
            )
        )
    );
};

var userType = _propTypes2.default.shape({
    logoutUrl: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string,
    profile: _propTypes2.default.string
});

// Either logoutUrl, either user
Header.propTypes = {
    logoutUrl: _propTypes2.default.string,
    title: _propTypes2.default.node,
    userInformation: _propTypes2.default.node,
    user: userType,
    additionalAction: _propTypes2.default.element
};