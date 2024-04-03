'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CrossIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CrossIcon = exports.CrossIcon = function CrossIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ viewBox: '0 0 20 20' }, props),
        _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('polygon', { points: '10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644' })
            )
        )
    );
};

CrossIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: _theme.theme.colors.blue
};

CrossIcon.displayName = 'CrossIcon';