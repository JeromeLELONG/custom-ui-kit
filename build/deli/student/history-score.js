'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HistoryScore = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    align-self: flex-end;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-left: ', ';\n    background-color: ', ';\n    border-radius: 50%;\n    height: 5rem;\n    width: 5rem;\n\n    span:first-child {\n        font-size: ', ';\n        border-bottom-style: solid;\n        border-bottom-width: 1px;\n        border-bottom-color: ', ';\n        margin-bottom: ', ';\n    }\n\n    span:last-child {\n        font-size: ', ';\n    }\n'], ['\n    align-self: flex-end;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-left: ', ';\n    background-color: ', ';\n    border-radius: 50%;\n    height: 5rem;\n    width: 5rem;\n\n    span:first-child {\n        font-size: ', ';\n        border-bottom-style: solid;\n        border-bottom-width: 1px;\n        border-bottom-color: ', ';\n        margin-bottom: ', ';\n    }\n\n    span:last-child {\n        font-size: ', ';\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HistoryScoreContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.s;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.lightRed;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fontSizes.l;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.black;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.fontSizes.xxs;
}, function (_ref6) {
    var theme = _ref6.theme;
    return theme.fontSizes.s;
});

var HistoryScore = exports.HistoryScore = function HistoryScore(_ref7) {
    var score = _ref7.score;
    return _react2.default.createElement(
        HistoryScoreContainer,
        null,
        _react2.default.createElement(
            'span',
            null,
            score
        ),
        _react2.default.createElement(
            'span',
            null,
            '20'
        )
    );
};