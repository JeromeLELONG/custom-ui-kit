'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    border: none;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    border-bottom-color: ', ';\n    border-radius: ', ';\n    display: inline-flex;\n    font: ', ';\n    margin: 0;\n    padding: 0;\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: 0;\n    transition-property: all;\n    transition-duration: ', ';\n    transition-timing-function: ', ';\n    -webkit-appearance: none;\n\n    background-color: ', ';\n\n    &:focus {\n        background: ', ';\n    }\n\n    width: 100%;\n'], ['\n    color: ', ';\n    border: none;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    border-bottom-color: ', ';\n    border-radius: ', ';\n    display: inline-flex;\n    font: ', ';\n    margin: 0;\n    padding: 0;\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: 0;\n    transition-property: all;\n    transition-duration: ', ';\n    transition-timing-function: ', ';\n    -webkit-appearance: none;\n\n    background-color: ', ';\n\n    &:focus {\n        background: ', ';\n    }\n\n    width: 100%;\n']);

var _polished = require('polished');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = exports.Input = _styledComponents2.default.input(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.black;
}, function (_ref2) {
    var t = _ref2.theme;
    return (0, _polished.darken)(0.2, t.colors.lightGrey);
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.xxs;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.fonts.copy;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.spacing.xs;
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.spacing.xs;
}, function (_ref7) {
    var theme = _ref7.theme;
    return theme.spacing.xs;
}, function (_ref8) {
    var theme = _ref8.theme;
    return theme.transitions.duration;
}, function (_ref9) {
    var theme = _ref9.theme;
    return theme.transitions.ease;
}, function (_ref10) {
    var valueChanged = _ref10.valueChanged,
        t = _ref10.theme;
    return valueChanged ? t.colors.warmGrey11c : t.colors.lightGrey;
}, function (_ref11) {
    var t = _ref11.theme;
    return (0, _polished.darken)(0.2, t.colors.lightGrey);
});

Input.displayName = 'Input';