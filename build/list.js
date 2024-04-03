'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItemTitle = exports.ListItem = exports.ListTitle = exports.List = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: ', ';\n    list-style-type: none;\n    padding: 0;\n    margin-top: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: ', ';\n    justify-content: ', ';\n\n    & > li {\n        margin-top: ', ';\n        margin-left: ', ';\n        margin-right: ', ';\n        margin-bottom: ', ';\n    }\n'], ['\n    display: flex;\n    flex-direction: ', ';\n    list-style-type: none;\n    padding: 0;\n    margin-top: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: ', ';\n    justify-content: ', ';\n\n    & > li {\n        margin-top: ', ';\n        margin-left: ', ';\n        margin-right: ', ';\n        margin-bottom: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border-bottom: solid 1px ', ';\n    color: ', ';\n    font: ', ';\n    font-size: ', ';\n    font-weight: bold;\n    margin: 0 0 ', ' 0;\n'], ['\n    border-bottom: solid 1px ', ';\n    color: ', ';\n    font: ', ';\n    font-size: ', ';\n    font-weight: bold;\n    margin: 0 0 ', ' 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n'], ['\n    display: flex;\n    flex-direction: column;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    color: ', ';\n    font: ', ';\n    margin: 0 0 ', ' 0;\n'], ['\n    color: ', ';\n    font: ', ';\n    margin: 0 0 ', ' 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = exports.List = _styledComponents2.default.ol(_templateObject, function (_ref) {
    var _ref$mode = _ref.mode,
        mode = _ref$mode === undefined ? 'vertical' : _ref$mode;
    return mode === 'horizontal' ? 'row' : 'column';
}, function (_ref2) {
    var _ref2$mode = _ref2.mode,
        mode = _ref2$mode === undefined ? 'vertical' : _ref2$mode,
        theme = _ref2.theme;
    return mode === 'horizontal' ? 0 : theme.spacing.l;
}, function (_ref3) {
    var _ref3$mode = _ref3.mode,
        mode = _ref3$mode === undefined ? 'vertical' : _ref3$mode;
    return mode === 'horizontal' ? 'space-evenly' : 'unset';
}, function (_ref4) {
    var _ref4$mode = _ref4.mode,
        mode = _ref4$mode === undefined ? 'vertical' : _ref4$mode,
        theme = _ref4.theme;
    return mode === 'horizontal' ? 0 : theme.spacing.xs;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.spacing.m;
}, function (_ref6) {
    var _ref6$mode = _ref6.mode,
        mode = _ref6$mode === undefined ? 'vertical' : _ref6$mode,
        theme = _ref6.theme;
    return mode === 'horizontal' ? theme.spacing.xs : 0;
}, function (_ref7) {
    var _ref7$mode = _ref7.mode,
        mode = _ref7$mode === undefined ? 'vertical' : _ref7$mode,
        theme = _ref7.theme;
    return mode === 'horizontal' ? 0 : theme.spacing.l;
});

var ListTitle = exports.ListTitle = _styledComponents2.default.h3(_templateObject2, function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.warmGrey8c;
}, function (_ref9) {
    var theme = _ref9.theme;
    return theme.colors.warmGrey8c;
}, function (_ref10) {
    var theme = _ref10.theme;
    return theme.fonts.copy;
}, function (_ref11) {
    var theme = _ref11.theme;
    return theme.fontSizes.l;
}, function (_ref12) {
    var theme = _ref12.theme;
    return theme.spacing.s;
});

var ListItem = exports.ListItem = _styledComponents2.default.li(_templateObject3);

var ListItemTitle = exports.ListItemTitle = _styledComponents2.default.h4(_templateObject4, function (_ref13) {
    var theme = _ref13.theme;
    return theme.colors.warmGrey8c;
}, function (_ref14) {
    var theme = _ref14.theme;
    return theme.fonts.copy;
}, function (_ref15) {
    var theme = _ref15.theme;
    return theme.spacing.xs;
});