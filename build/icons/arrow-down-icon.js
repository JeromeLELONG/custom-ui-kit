'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrowDownIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowDownIcon = exports.ArrowDownIcon = function ArrowDownIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ viewBox: '0 0 20 20' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('polygon', { points: '9 16.1715729 2.92893219 10.1005051 1.51471863 11.5147186 10 20 10.7071068 19.2928932 18.4852814 11.5147186 17.0710678 10.1005051 11 16.1715729 11 0 9 0' })
            )
        )
    );
};

ArrowDownIcon.displayName = 'ArrowDownIcon';

ArrowDownIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: _theme.theme.colors.warmGrey8c
};