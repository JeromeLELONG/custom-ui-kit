'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Progress = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    height: 1rem;\n'], ['\n    position: relative;\n    height: 1rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: ', ';\n    background-color: ', ';\n    border: none;\n    width: 100%;\n\n    &::-webkit-progress-bar {\n        border-radius: ', ';\n        background-color: ', ';\n    }\n\n    &::-webkit-progress-value {\n        border-radius: ', ';\n        background-color: ', ';\n    }\n\n    &::-moz-progress-bar {\n        border-radius: ', ';\n        background-color: ', ';\n    }\n'], ['\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: ', ';\n    background-color: ', ';\n    border: none;\n    width: 100%;\n\n    &::-webkit-progress-bar {\n        border-radius: ', ';\n        background-color: ', ';\n    }\n\n    &::-webkit-progress-value {\n        border-radius: ', ';\n        background-color: ', ';\n    }\n\n    &::-moz-progress-bar {\n        border-radius: ', ';\n        background-color: ', ';\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    text-align: center;\n    font: ', ';\n    color: ', ';\n'], ['\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    text-align: center;\n    font: ', ';\n    color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProgressContainer = _styledComponents2.default.div(_templateObject);

var ProgressBar = _styledComponents2.default.progress(_templateObject2, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.xxs;
}, function (_ref2) {
    var backgroundColor = _ref2.backgroundColor;
    return backgroundColor;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.xxs;
}, function (_ref4) {
    var backgroundColor = _ref4.backgroundColor;
    return backgroundColor;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.spacing.xxs;
}, function (_ref6) {
    var color = _ref6.color;
    return color;
}, function (_ref7) {
    var theme = _ref7.theme;
    return theme.spacing.xxs;
}, function (_ref8) {
    var color = _ref8.color;
    return color;
});

var ProgressLabel = _styledComponents2.default.span(_templateObject3, function (_ref9) {
    var theme = _ref9.theme;
    return theme.fonts.button;
}, function (_ref10) {
    var theme = _ref10.theme;
    return theme.colors.black;
});

var Progress = exports.Progress = function Progress(_ref11) {
    var max = _ref11.max,
        value = _ref11.value,
        color = _ref11.color,
        backgroundColor = _ref11.backgroundColor,
        label = _ref11.label;
    return _react2.default.createElement(
        ProgressContainer,
        null,
        _react2.default.createElement(ProgressBar, { max: max, value: value, color: color, backgroundColor: backgroundColor }),
        label && _react2.default.createElement(
            ProgressLabel,
            null,
            label
        )
    );
};

Progress.propTypes = {
    max: _propTypes2.default.number,
    value: _propTypes2.default.number.isRequired,
    color: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    label: _propTypes2.default.string
};

Progress.defaultProps = {
    color: _theme.theme.colors.green,
    backgroundColor: _theme.theme.colors.warmGrey4c
};