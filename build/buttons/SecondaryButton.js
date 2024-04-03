'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SecondaryButton = exports.secondaryButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    color: ', ';\n    background-color: ', ';\n    &:focus {\n        color: ', ';\n        background-color: ', ';\n    }\n    &:hover {\n        color: ', ';\n        background-color: ', ';\n    }\n    &:active {\n        color: ', ';\n    }\n    &[disabled] {\n        color: ', ';\n    }\n'], ['\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    color: ', ';\n    background-color: ', ';\n    &:focus {\n        color: ', ';\n        background-color: ', ';\n    }\n    &:hover {\n        color: ', ';\n        background-color: ', ';\n    }\n    &:active {\n        color: ', ';\n    }\n    &[disabled] {\n        color: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', ';\n'], ['\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseButton = require('./BaseButton');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var secondaryButton = exports.secondaryButton = (0, _styledComponents.css)(_templateObject, _BaseButton.BaseButton, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.l;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.l;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.blue;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.white;
}, function (_ref5) {
    var theme = _ref5.theme;
    return (0, _polished.darken)(0.3)(theme.colors.blue);
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.lightGrey;
}, function (_ref7) {
    var theme = _ref7.theme;
    return (0, _polished.darken)(0.3)(theme.colors.blue);
}, function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.lightGrey;
}, function (_ref9) {
    var theme = _ref9.theme;
    return (0, _polished.darken)(0.5)(theme.colors.blue);
}, function (_ref10) {
    var theme = _ref10.theme;
    return (0, _polished.lighten)(0.3)(theme.colors.blue);
});

var SecondaryButton = exports.SecondaryButton = _styledComponents2.default.button(_templateObject2, secondaryButton);

SecondaryButton.displayName = 'SecondaryButton';