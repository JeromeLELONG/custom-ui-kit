'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToolbarLink = exports.ToolbarItem = exports.Toolbar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: ', ';\n    margin-bottom: ', ';\n'], ['\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: ', ';\n    margin-bottom: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n\n    & + * {\n        margin-left: ', ';\n    }\n'], ['\n    display: flex;\n    flex-direction: column;\n\n    & + * {\n        margin-left: ', ';\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: ', ';\n'], ['\n    font-size: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _A = require('./A');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Toolbar = exports.Toolbar = _styledComponents2.default.div(_templateObject, function (_ref) {
    var _ref$alignment = _ref.alignment,
        alignment = _ref$alignment === undefined ? 'left' : _ref$alignment;
    return alignment === 'left' ? 'start' : 'end';
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.s;
});

var ToolbarItem = exports.ToolbarItem = _styledComponents2.default.div(_templateObject2, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.m;
});

var ToolbarLink = exports.ToolbarLink = _A.A.extend(_templateObject3, function (_ref4) {
    var theme = _ref4.theme;
    return theme.fontSizes.s;
});