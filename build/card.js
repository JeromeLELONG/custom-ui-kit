'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardSubTitle = exports.CardTitle = exports.SecondaryCard = exports.PrimaryCard = exports.Card = exports.GhostCard = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    padding: ', ';\n    margin: 0 0 ', ' 0;\n'], ['\n    display: flex;\n    flex-direction: column;\n    padding: ', ';\n    margin: 0 0 ', ' 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    padding: ', ';\n    margin: 0 0 ', ' 0;\n'], ['\n    background-color: ', ';\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    padding: ', ';\n    margin: 0 0 ', ' 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    border-left-style: solid;\n    border-left-width: ', ';\n    border-left-color: ', ';\n'], ['\n    border-left-style: solid;\n    border-left-width: ', ';\n    border-left-color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    margin: 0 0 ', ' 0;\n    color: ', ';\n'], ['\n    margin: 0 0 ', ' 0;\n    color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GhostCard = exports.GhostCard = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.s;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.m;
});

var Card = exports.Card = GhostCard.extend(_templateObject2, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.white;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.s;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.spacing.m;
});

var PrimaryCard = exports.PrimaryCard = Card.extend(_templateObject3, function (_ref6) {
    var theme = _ref6.theme;
    return theme.spacing.xs;
}, function (_ref7) {
    var theme = _ref7.theme;
    return theme.colors.red;
});

var SecondaryCard = exports.SecondaryCard = Card.extend(_templateObject3, function (_ref8) {
    var theme = _ref8.theme;
    return theme.spacing.xs;
}, function (_ref9) {
    var theme = _ref9.theme;
    return theme.colors.lightRed;
});

var CardTitle = exports.CardTitle = _styledComponents2.default.h2(_templateObject4, function (_ref10) {
    var theme = _ref10.theme;
    return theme.spacing.s;
}, function (_ref11) {
    var theme = _ref11.theme;
    return theme.colors.black;
});

var CardSubTitle = exports.CardSubTitle = _styledComponents2.default.h3(_templateObject4, function (_ref12) {
    var theme = _ref12.theme;
    return theme.spacing.s;
}, function (_ref13) {
    var theme = _ref13.theme;
    return theme.colors.black;
});