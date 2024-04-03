'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnvelopeIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnvelopeIcon = exports.EnvelopeIcon = function EnvelopeIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, props),
        _react2.default.createElement('path', { d: 'M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z' })
    );
};

EnvelopeIcon.defaultProps = {
    height: 16,
    width: 16,
    fill: _theme.theme.colors.warmGrey8c
};

EnvelopeIcon.displayName = 'EnvelopeIcon';