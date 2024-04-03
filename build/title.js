'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Title = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    display: flex;\n    align-items: center;\n    font: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n    margin-left: 0;\n    margin-right: 0;\n'], ['\n    color: ', ';\n    display: flex;\n    align-items: center;\n    font: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n    margin-left: 0;\n    margin-right: 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = exports.Title = _styledComponents2.default.h2(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.black;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fonts.title;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.s;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.s;
});