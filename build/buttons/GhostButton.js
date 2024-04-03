'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GhostButton = exports.ghostButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', ' background-color: transparent;\n    box-shadow: none;\n    color: ', ';\n    font-weight: bold;\n\n    ToolbarLink &:focus {\n        background-color: transparent;\n        color: ', ';\n    }\n    &:hover {\n        background-color: transparent;\n        color: ', ';\n    }\n    &:active {\n        background-color: transparent;\n        color: ', ';\n    }\n    &[disabled] {\n        background-color: transparent;\n        color: ', ';\n    }\n'], ['\n    ', ' background-color: transparent;\n    box-shadow: none;\n    color: ', ';\n    font-weight: bold;\n\n    ToolbarLink &:focus {\n        background-color: transparent;\n        color: ', ';\n    }\n    &:hover {\n        background-color: transparent;\n        color: ', ';\n    }\n    &:active {\n        background-color: transparent;\n        color: ', ';\n    }\n    &[disabled] {\n        background-color: transparent;\n        color: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', ';\n'], ['\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _BaseButton = require('./BaseButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ghostButton = exports.ghostButton = (0, _styledComponents.css)(_templateObject, _BaseButton.BaseButton, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.blue;
}, function (_ref2) {
    var theme = _ref2.theme;
    return (0, _polished.darken)(0.1)(theme.colors.blue);
}, function (_ref3) {
    var theme = _ref3.theme;
    return (0, _polished.darken)(0.2)(theme.colors.blue);
}, function (_ref4) {
    var theme = _ref4.theme;
    return (0, _polished.darken)(0.2)(theme.colors.blue);
}, function (_ref5) {
    var theme = _ref5.theme;
    return (0, _polished.lighten)(0.2)(theme.colors.blue);
});

var GhostButton = exports.GhostButton = _styledComponents2.default.button(_templateObject2, ghostButton);

GhostButton.displayName = 'GhostButton';