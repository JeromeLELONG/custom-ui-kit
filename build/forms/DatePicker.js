'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatePicker = exports.DatePickerContainer = exports.DatePickerInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n\n    ::-webkit-clear-button,\n    ::-webkit-calendar-picker-indicator {\n        position: absolute;\n    }\n    ::-webkit-clear-button {\n        right: 1.54em;\n    }\n    ::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    ::-webkit-calendar-picker-indicator {\n        right: 0;\n        padding: 0.539em 0.34em;\n    }\n'], ['\n    position: relative;\n\n    ::-webkit-clear-button,\n    ::-webkit-calendar-picker-indicator {\n        position: absolute;\n    }\n    ::-webkit-clear-button {\n        right: 1.54em;\n    }\n    ::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    ::-webkit-calendar-picker-indicator {\n        right: 0;\n        padding: 0.539em 0.34em;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-flex;\n    align-items: center;\n    justify-content: space-around;\n\n    & > input {\n        display: inline-flex;\n        flex-grow: 1;\n        overflow: hidden;\n    }\n\n    & > svg {\n        margin-left: auto;\n        padding-left: ', ';\n    }\n'], ['\n    display: inline-flex;\n    align-items: center;\n    justify-content: space-around;\n\n    & > input {\n        display: inline-flex;\n        flex-grow: 1;\n        overflow: hidden;\n    }\n\n    & > svg {\n        margin-left: auto;\n        padding-left: ', ';\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateFns = require('date-fns');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../icons');

var _Input = require('./Input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DatePickerInput = exports.DatePickerInput = (0, _styledComponents2.default)(_Input.Input).attrs({ type: 'date' })(_templateObject);

var DatePickerContainer = exports.DatePickerContainer = _styledComponents2.default.div(_templateObject2, function (_ref) {
    var t = _ref.theme;
    return t.spacing.xxs;
});

var DatePicker = function DatePicker(_ref2) {
    var value = _ref2.value,
        props = _objectWithoutProperties(_ref2, ['value']);

    return _react2.default.createElement(
        DatePickerContainer,
        null,
        _react2.default.createElement(DatePickerInput, _extends({}, props, {
            value: value ? (0, _dateFns.format)(value, 'YYYY-MM-DD') : ''
        })),
        _react2.default.createElement(_icons.CalendarIcon, null)
    );
};

exports.DatePicker = DatePicker;
DatePicker.propTypes = {
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)])
};