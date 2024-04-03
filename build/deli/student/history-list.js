'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HistoryList = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    list-style-type: none;\n    margin: 0;\n\n    & li {\n        display: flex;\n        padding: 1rem 0;\n    }\n'], ['\n    list-style-type: none;\n    margin: 0;\n\n    & li {\n        display: flex;\n        padding: 1rem 0;\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HistoryList = exports.HistoryList = _styledComponents2.default.ol(_templateObject);