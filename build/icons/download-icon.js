'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DownloadIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownloadIcon = exports.DownloadIcon = function DownloadIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, props),
        _react2.default.createElement('path', { d: 'M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' })
    );
};

DownloadIcon.defaultProps = {
    height: 16,
    width: 16,
    fill: _theme.theme.colors.warmGrey8c
};

DownloadIcon.displayName = 'DownloadIcon';