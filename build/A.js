'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.A = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    padding-left: 0;\n    padding-right: 0;\n    color: ', ';\n    font-weight: bold;\n    text-decoration: none;\n    &:hover {\n        background-color: transparent;\n        color: ', ';\n    }\n    &:active {\n        background-color: transparent;\n        color: ', ';\n    }\n'], ['\n    padding-left: 0;\n    padding-right: 0;\n    color: ', ';\n    font-weight: bold;\n    text-decoration: none;\n    &:hover {\n        background-color: transparent;\n        color: ', ';\n    }\n    &:active {\n        background-color: transparent;\n        color: ', ';\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var A = exports.A = _styledComponents2.default.a(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.blue;
}, function (_ref2) {
    var theme = _ref2.theme;
    return (0, _polished.darken)(0.2)(theme.colors.blue);
}, function (_ref3) {
    var theme = _ref3.theme;
    return (0, _polished.darken)(0.2)(theme.colors.blue);
});