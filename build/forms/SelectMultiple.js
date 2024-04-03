'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectMultiple = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _polished = require('polished');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customTheme = function customTheme(defaultTheme) {
    return _extends({}, defaultTheme, {
        borderRadius: _theme.theme.spacing.xxs,
        colors: _extends({}, defaultTheme.colors, {
            neutral0: _theme.theme.colors.lightGrey,
            primary: (0, _polished.darken)(0.6, _theme.theme.colors.lightGrey),
            primary75: (0, _polished.darken)(0.4, _theme.theme.colors.lightGrey),
            primary50: (0, _polished.darken)(0.2, _theme.theme.colors.lightGrey),
            primary25: (0, _polished.darken)(0.2, _theme.theme.colors.lightGrey),
            danger: _theme.theme.colors.primaryRed,
            dangerLight: _theme.theme.colors.red
        }),
        spacing: _extends({}, defaultTheme.spacing, {
            baseUnit: _theme.theme.spaceBase * 2.5
        })
    });
};

var styles = { container: function container(provided) {
        return _extends({}, provided, { font: _theme.theme.fonts.copy });
    } };

var SelectMultiple = exports.SelectMultiple = function SelectMultiple(props) {
    return _react2.default.createElement(_reactSelect2.default, _extends({ theme: customTheme, styles: styles }, props));
};

SelectMultiple.defaultProps = {
    isMulti: true
};