'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormLabel = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    font-size: ', ';\n    margin-bottom: ', ';\n'], ['\n    color: ', ';\n    font-size: ', ';\n    margin-bottom: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormLabel = exports.FormLabel = _styledComponents2.default.label(_templateObject, function (_ref) {
    var disabled = _ref.disabled,
        hasError = _ref.hasError,
        theme = _ref.theme;
    return hasError ? theme.colors.red : disabled ? theme.colors.warmGrey8c : theme.colors.black;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontSizes.s;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.s;
});

FormLabel.displayName = 'FormLabel';