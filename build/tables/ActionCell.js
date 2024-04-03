'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ActionCell = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    & button,\n    & a {\n        margin: 0;\n        padding-top: 0;\n        padding-bottom: 0;\n    }\n\n    & > * + * {\n        margin-left: ', ';\n    }\n'], ['\n    & button,\n    & a {\n        margin: 0;\n        padding-top: 0;\n        padding-bottom: 0;\n    }\n\n    & > * + * {\n        margin-left: ', ';\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActionCell = exports.ActionCell = _styledComponents2.default.td(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.xs;
});