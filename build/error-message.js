'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorMessage = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    font-size: ', ';\n    font-style: italic;\n    color: ', ';\n    svg {\n        margin-right: ', ';\n    }\n'], ['\n    display: flex;\n    font-size: ', ';\n    font-style: italic;\n    color: ', ';\n    svg {\n        margin-right: ', ';\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ErrorMessage = exports.ErrorMessage = _styledComponents2.default.p.attrs({ role: 'alert' })(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.fontSizes.s;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.primaryRed;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.xs;
});