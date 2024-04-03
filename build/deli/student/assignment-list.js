'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AssignmentList = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    list-style-type: none;\n    font-family: \'Open Sans\';\n    margin: 0;\n\n    & + * {\n        margin-top: ', ';\n    }\n\n    & li {\n        display: flex;\n        flex-direction: column;\n        padding: 1rem 0;\n    }\n'], ['\n    list-style-type: none;\n    font-family: \'Open Sans\';\n    margin: 0;\n\n    & + * {\n        margin-top: ', ';\n    }\n\n    & li {\n        display: flex;\n        flex-direction: column;\n        padding: 1rem 0;\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AssignmentList = exports.AssignmentList = _styledComponents2.default.ol(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.l;
});