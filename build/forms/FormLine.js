'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormLine = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n\n    & > div {\n        flex-basis: 50%;\n    }\n    & > div + * {\n        margin-left: ', ';\n    }\n'], ['\n    display: flex;\n\n    & > div {\n        flex-basis: 50%;\n    }\n    & > div + * {\n        margin-left: ', ';\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormLine = exports.FormLine = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.s;
});