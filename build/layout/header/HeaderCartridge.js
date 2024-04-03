'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeaderCartridge = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    padding: ', ' ', ';\n    background-color: ', ';\n    border-radius: ', ';\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    color: ', ';\n    font-size: 14px;\n\n    & > *:not(:first-child) {\n        margin-left: ', ';\n    }\n'], ['\n    display: flex;\n    padding: ', ' ', ';\n    background-color: ', ';\n    border-radius: ', ';\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    color: ', ';\n    font-size: 14px;\n\n    & > *:not(:first-child) {\n        margin-left: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n'], ['\n    display: flex;\n    align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CartridgeContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.xs;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.s;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.blue;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.xxs;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.white;
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.spacing.s;
});

var VerticalCenter = _styledComponents2.default.div(_templateObject2);

var HeaderCartridge = exports.HeaderCartridge = function HeaderCartridge(_ref7) {
    var children = _ref7.children,
        icon = _ref7.icon,
        action = _ref7.action;
    return _react2.default.createElement(
        CartridgeContainer,
        null,
        icon && _react2.default.createElement(
            VerticalCenter,
            null,
            icon
        ),
        _react2.default.createElement(
            VerticalCenter,
            null,
            children
        ),
        action && _react2.default.createElement(
            VerticalCenter,
            null,
            _react2.default.createElement(
                'div',
                null,
                action
            )
        )
    );
};

HeaderCartridge.propTypes = {
    children: _propTypes2.default.node,
    icon: _propTypes2.default.node,
    action: _propTypes2.default.node
};