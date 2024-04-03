'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrowUpIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowUpIcon = exports.ArrowUpIcon = function ArrowUpIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ viewBox: '0 0 20 20' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('polygon', { points: '9 3.82842712 2.92893219 9.89949494 1.51471863 8.48528137 10 0 10.7071068 0.707106781 18.4852814 8.48528137 17.0710678 9.89949494 11 3.82842712 11 20 9 20 9 3.82842712' })
            )
        )
    );
};

ArrowUpIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: _theme.theme.colors.warmGrey8c
};

ArrowUpIcon.displayName = 'ArrowUpIcon';