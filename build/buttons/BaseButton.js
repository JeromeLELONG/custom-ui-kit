'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    border: none;\n    border-radius: ', ';\n    color: ', ';\n    cursor: pointer;\n    font: ', ';\n    outline: none;\n    padding-top: ', ';\n    padding-bottom: ', ';\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition-property: all;\n    transition-duration: ', ';\n    transition-timing-function: ', ';\n    white-space: nowrap;\n\n    padding-left: ', ';\n    padding-right: ', ';\n'], ['\n    border: none;\n    border-radius: ', ';\n    color: ', ';\n    cursor: pointer;\n    font: ', ';\n    outline: none;\n    padding-top: ', ';\n    padding-bottom: ', ';\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition-property: all;\n    transition-duration: ', ';\n    transition-timing-function: ', ';\n    white-space: nowrap;\n\n    padding-left: ', ';\n    padding-right: ', ';\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseButton = exports.BaseButton = (0, _styledComponents.css)(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.xxs;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.black;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fonts.button;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.xxs;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.spacing.xxs;
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.transitions.duration;
}, function (_ref7) {
    var theme = _ref7.theme;
    return theme.transitions.ease;
}, function (_ref8) {
    var condensed = _ref8.condensed,
        theme = _ref8.theme;
    return theme.spacing[condensed ? 'xs' : 'l'];
}, function (_ref9) {
    var condensed = _ref9.condensed,
        theme = _ref9.theme;
    return theme.spacing[condensed ? 'xs' : 'l'];
});