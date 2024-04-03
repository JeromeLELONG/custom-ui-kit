'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TrashIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrashIcon = exports.TrashIcon = function TrashIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ viewBox: '0 0 20 20' }, props),
        _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { d: 'M2,2 L18,2 L18,4 L2,4 L2,2 Z M8,0 L12,0 L14,2 L6,2 L8,0 Z M3,6 L17,6 L16,20 L4,20 L3,6 Z M8,8 L9,8 L9,18 L8,18 L8,8 Z M11,8 L12,8 L12,18 L11,18 L11,8 Z' })
            )
        )
    );
};

TrashIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: _theme.theme.colors.red
};

TrashIcon.displayName = 'TrashIcon';