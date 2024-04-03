'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = exports.button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n    background-color: ', ';\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n\n    &:focus {\n        background-color: ', ';\n    }\n    &:hover {\n        background-color: ', ';\n    }\n    &:active {\n        background-color: ', ';\n    }\n    &[disabled] {\n        background-color: ', ';\n    }\n'], ['\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n    background-color: ', ';\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n\n    &:focus {\n        background-color: ', ';\n    }\n    &:hover {\n        background-color: ', ';\n    }\n    &:active {\n        background-color: ', ';\n    }\n    &[disabled] {\n        background-color: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', ';\n'], ['\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseButton = require('./BaseButton');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var button = exports.button = (0, _styledComponents.css)(_templateObject, _BaseButton.BaseButton, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.l;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.l;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.white;
}, function (_ref4) {
    var theme = _ref4.theme;
    return (0, _polished.darken)(0.1)(theme.colors.warmGrey4c);
}, function (_ref5) {
    var theme = _ref5.theme;
    return (0, _polished.darken)(0.1)(theme.colors.warmGrey4c);
}, function (_ref6) {
    var theme = _ref6.theme;
    return (0, _polished.darken)(0.2)(theme.colors.warmGrey4c);
}, function (_ref7) {
    var theme = _ref7.theme;
    return (0, _polished.lighten)(0.1)(theme.colors.warmGrey4c);
});

var Button = exports.Button = _styledComponents2.default.button(_templateObject2, button);

Button.displayName = 'Button';