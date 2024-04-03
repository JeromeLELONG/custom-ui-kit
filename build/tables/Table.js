'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Table = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: auto;\n\n    thead,\n    tbody {\n        th,\n        td {\n            border-style: solid none solid none;\n            border-width: 1px;\n            padding-bottom: ', ';\n            padding-top: ', ';\n            padding-left: ', ';\n            padding-right: ', ';\n        }\n\n        th {\n            border-top-style: none;\n            border-color: ', ';\n            color: ', ';\n            text-align: left;\n            text-transform: uppercase;\n            font-size: 0.8em;\n        }\n\n        td {\n            border-color: ', ';\n            background-color: ', ';\n        }\n    }\n'], ['\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: auto;\n\n    thead,\n    tbody {\n        th,\n        td {\n            border-style: solid none solid none;\n            border-width: 1px;\n            padding-bottom: ', ';\n            padding-top: ', ';\n            padding-left: ', ';\n            padding-right: ', ';\n        }\n\n        th {\n            border-top-style: none;\n            border-color: ', ';\n            color: ', ';\n            text-align: left;\n            text-transform: uppercase;\n            font-size: 0.8em;\n        }\n\n        td {\n            border-color: ', ';\n            background-color: ', ';\n        }\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Table = exports.Table = _styledComponents2.default.table(_templateObject, function (_ref) {
    var condensed = _ref.condensed,
        theme = _ref.theme;
    return theme.spacing[condensed ? 'xxs' : 's'];
}, function (_ref2) {
    var condensed = _ref2.condensed,
        theme = _ref2.theme;
    return theme.spacing[condensed ? 'xxs' : 's'];
}, function (_ref3) {
    var condensed = _ref3.condensed,
        theme = _ref3.theme;
    return theme.spacing[condensed ? 'xs' : 'm'];
}, function (_ref4) {
    var condensed = _ref4.condensed,
        theme = _ref4.theme;
    return theme.spacing[condensed ? 'xs' : 'm'];
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.lightGrey;
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.black;
}, function (_ref7) {
    var theme = _ref7.theme;
    return theme.colors.lightGrey;
}, function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.white;
});

Table.displayName = 'Table';